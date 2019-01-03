var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var recruitSchema = new Schema({

  Name: {
    type: String,
    trim: true,
    required: "Name is Required"
  },

  Organization: {
    type: String,
    trim: true,
  },

  Email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  Message: {
    type: String,
    trim: true
  }
});

var recruit = mongoose.model("recruit", recruitSchema);

module.exports = recruit;
