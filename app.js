const express = require("express");
const app = express();
const dataRoute = require("./kel4/router");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use("/",dataRoute);

module.exports = app;