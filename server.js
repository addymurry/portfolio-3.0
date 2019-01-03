var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var path = require("path");

var PORT = process.env.PORT || 3120;

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/portfoliodb";

var recruit = require("./model");

var app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("app/public"));

mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

app.post("/submit", function(req, res) {

  recruit.create(req.body)

});


app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
