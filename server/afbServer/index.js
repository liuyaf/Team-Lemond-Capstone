const express = require("express");
const app = express();
const mongoose = require("mongoose");
const fs = require('fs');
const https = require('https');
const http = require('http');


const TLSCERT = fs.readFileSync("/etc/letsencrypt/live/api.liuyaf.me/fullchain.pem");
const TLSKEY = fs.readFileSync("/etc/letsencrypt/live/api.liuyaf.me/privkey.pem");
const httpsOptions = {
    cert: TLSCERT,
    key: TLSKEY
}



mongoose.connect("mongodb://mongodb/afbserver", {
    useNewUrlParser: true
});
var db = mongoose.connection;

app.get("/", (req, res) => {
    res.send("hi, there");
});


// app.listen(5100);
https.createServer(httpsOptions, app).listen(443);
http.createServer((req, res) => {
    res.writeHead(301, {
        "Location": "https://" + req.headers['host'] + req.url
    });
    res.end()
}).listen(80);

console.log("running on port 443..");