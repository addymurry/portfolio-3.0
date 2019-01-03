var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");

var PORT = process.env.PORT || 3000

var recruit = require("./model");

var app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/portfoliodb", { useNewUrlParser: true });

app.post("/submit", function(req, res) {

  recruit.create(req.body)

});


app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
