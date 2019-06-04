const express = require("express");
const app = express();
const mongoose = require("mongoose");
const fs = require("fs");
const https = require("https");
const http = require("http");
const bodyParser = require("body-parser");
const cors = require('cors')
const bcrypt = require('bcrypt')
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const saltRounds = 10

app.use(bodyParser.json());
app.use(cors({
    origin: ["https://staff.goagefriendly.org", "https://goagefriendly.org"],
    credentials: true,
    exposedHeaders: "user"
}))

Employer = require("./models/employer");
Customer = require("./models/customer");
User = require("./models/user");

const TLSCERT = fs.readFileSync(
    "/etc/letsencrypt/live/api.goagefriendly.org/fullchain.pem"
);
const TLSKEY = fs.readFileSync(
    "/etc/letsencrypt/live/api.goagefriendly.org/privkey.pem"
);
const httpsOptions = {
    cert: TLSCERT,
    key: TLSKEY
};

// mongoose.connect("mongodb://localhost/afbserver", {
//     useNewUrlParser: true
// });
mongoose.connect("mongodb://mongodb/afbserver", {
    useNewUrlParser: true
});
var db = mongoose.connection;

app.use(session({

    secret: 'afbsecret',
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 600000,
        httpOnly: false
    },
    name: "asdb",
    store: new MongoStore({
        mongooseConnection: db
    })
}));

app.all("/v1/customer-result", (req, res) => {
    let method = req.method;
    if (method == "GET") {
        Customer.getCustomerResults((err, result) => {
            if (err) {
                throw err;
            }
            result = adjustFormatToRelational(result);
            res.json(result);
        });
    } else if (method == "POST") {
        let result = req.body;
        Customer.addCustomerResult(result, (err, result) => {
            if (err) {
                throw err;
            }

            res.status(201).json(result);
        });
    } else {
        res.status(405).send("invalid request type");
    }
});

app.all("/v1/employer-result", (req, res) => {
    let method = req.method;
    if (method == "GET") {
        Employer.getEmployerResults((err, result) => {
            if (err) {
                throw err;
            }
            result = adjustFormatToRelational(result);
            res.json(result);
        });
    } else if (method == "POST") {
        let result = req.body;
        Employer.addEmployerResult(result, (err, result) => {
            if (err) {
                throw err;
            }

            res.status(201).json(result);
        });
    } else {
        res.status(405).send("invalid requrest type");
    }
});

app.all("/v1/users", (req, res) => {
    let method = req.method;

    if (method == "POST") {
        let user = req.body
        let newUser = {}

        newUser.fName = user.fName
        newUser.lName = user.lName
        newUser.userName = user.userName
        newUser.email = user.email
        let authUser = req.headers.user
        if (req.session.isLoggedIn && req.session.userName == authUser) {
            User.findExistingUser(user.userName, user.email, (err, result) => {
                if (err) throw err
                if (result == null) {
                    bcrypt.hash(user.password, saltRounds, (errHash, hash) => {
                        if (errHash) throw errHash;
                        newUser.passHash = hash
                        User.createUser(newUser, (createErr, result) => {
                            if (createErr) throw createErr
                            res.status(201).json(result)
                        })
                    })
                } else {
                    res.status(400).send("user already existed")
                }
            })
        } else {
            res.status(403).send("not authorized user");
        }

    } else {
        res.status(405).send("invalid request type");
    }
})


app.all("/v1/sessions", (req, res) => {
    let method = req.method;
    let body = req.body
    if (method == "GET") {
        let authUser = req.headers.user

        if (req.session.isLoggedIn && req.session.userName == authUser) {
            res.send("alreay logged in");
        } else {
            res.status(201).send("no logged in user")
        }
    } else if (method == "POST") {

        if (req.session.isLoggedIn && req.session.userName == body.userName) {
            return res.status(301).send("already logged in")
        }
        User.findUser(body.userName, (err, result) => {
            if (err) throw err;
            if (result == null) return res.status(401).send("no matching user")
            let passHash = result.passHash
            bcrypt.compare(body.password, passHash, (errCompare, sessres) => {
                if (err) throw errCompare
                if (sessres === true) {
                    req.session.isLoggedIn = true
                    req.session.userName = body.userName
                    res.set('user', body.userName)
                    res.status(201).send("logged in")
                } else {
                    res.status(403).send("wrong credentials")
                }
            })
        })
    } else if (method == "DELETE") {
        let authUser = req.headers.user
        if (req.session.isLoggedIn && req.session.userName == authUser) {
            req.session.destroy()
            res.send("logged out")
        } else {
            res.status(401).send("Unauthorized user")
        }
    } else {
        res.status(405).send("invalid request type");
    }

})

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.set("Content-Type", "text/plain");
    res.status(500).send(err.message);
});

function adjustFormatToRelational(jsonResult) {
    let formatted = [];
    let titles = {
        id: {
            title: 'id'
        },
        submittedAt: {
            title: 'submittedAt'
        },
        businessType: {
            title: 'businessType'
        },
        busniessSize: {
            title: 'busniessSize'
        },
        zipcode: {
            title: 'zipcode'
        }
    }
    formatted.push(titles)
    for (let i = 0; i < jsonResult.length; i++) {
        let oneRecord = jsonResult[i];
        let obj = {};
        obj.id = i + 1;
        obj.submittedAt = oneRecord.submittedAt;
        obj.businessType = oneRecord.businessInfo.businessType;
        obj.busniessSize = oneRecord.businessInfo.busniessSize;
        obj.zipcode = oneRecord.businessInfo.zipcode;
        for (let j = 0; j < oneRecord.responses.length; j++) {
            let title = "s" + (j + 1);
            for (let k = 0; k < oneRecord.responses[j].length; k++) {
                let a = title + "q" + (k + 1);
                if (titles[a] == undefined) {
                    titles[a] = {
                        title: a
                    }
                }
                obj[a] = oneRecord.responses[j][k];
            }
        }
        formatted.push(obj);
    }
    return formatted;
}



// app.listen(5100);
https.createServer(httpsOptions, app).listen(443);
http
    .createServer((req, res) => {
        res.writeHead(301, {
            Location: "https://" + req.headers["host"] + req.url
        });
        res.end();
    })
    .listen(80);

console.log("running on port 443..");