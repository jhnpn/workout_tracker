var express = require("express");
var mongoDB = require("mongodb");
var mongoose = require("mongoose");

var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});