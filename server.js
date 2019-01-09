var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var mongojs = require("mongojs");
var path = require("path");

var PORT = process.env.PORT || 8000;

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongolab-flexible-64294";



var db = require("./app/models/recruit");

var app = express();


var collections = ["recruits"];

// Hook our mongojs config to the db var
var db = mongojs(MONGODB_URI, collections);
db.on("error", function(error) {
  console.log("Database Error:", error);
});


app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("app/public"));

mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

app.post("/submit", function(req, res) {
  // Save the request body as an object called recruit
  var recruit = req.body;

  // If we want the object to have a boolean value of false,
  // we have to do it here, because the ajax post will convert it
  // to a string instead of a boolean

  // Save the recruit object as an entry into the recruits collection in mongo
  db.recruits.save(recruit, function(error, saved) {
    // Show any errors
    if (error) {
      console.log(error);
    }
    else {
      // Otherwise, send the response to the client (for AJAX success function)
      res.send(saved);
    }
  });
});

app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
