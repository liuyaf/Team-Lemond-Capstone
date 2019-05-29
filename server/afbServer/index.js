const express = require("express");
const app = express();
const mongoose = require("mongoose");
const fs = require("fs");
const https = require("https");
const http = require("http");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

Employer = require("./models/employer");
Customer = require("./models/customer");

// const TLSCERT = fs.readFileSync(
//   "/etc/letsencrypt/live/api.liuyaf.me/fullchain.pem"
// );
// const TLSKEY = fs.readFileSync(
//   "/etc/letsencrypt/live/api.liuyaf.me/privkey.pem"
// );
// const httpsOptions = {
//   cert: TLSCERT,
//   key: TLSKEY
// };

mongoose.connect("mongodb://localhost/afbserver", {
    useNewUrlParser: true
});
// mongoose.connect("mongodb://mongodb/afbserver", {
//   useNewUrlParser: true
// });
var db = mongoose.connection;

app.all("/v1/customer-result", (req, res) => {
    let method = req.method;
    if (method == "GET") {} else if (method == "POST") {
        let result = req.body;
        Customer.addCustomerResult(result, (err, result) => {
            if (err) {
                throw err;
            }
            res.json(result);
        });
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
            res.json(result)
            // result = adjustFormatToRelational(result);
            // //   res.json(result);
            // res.json(result)
        });
    }
});

function adjustFormatToRelational(jsonResult) {
    let formatted = [];
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
                obj[a] = oneRecord.responses[j][k];
            }
        }
        formatted.push(obj);
    }
    return formatted;
}

app.listen(5100);
// https.createServer(httpsOptions, app).listen(443);
// http
//   .createServer((req, res) => {
//     res.writeHead(301, {
//       Location: "https://" + req.headers["host"] + req.url
//     });
//     res.end();
//   })
//   .listen(80);

console.log("running on port 443..");