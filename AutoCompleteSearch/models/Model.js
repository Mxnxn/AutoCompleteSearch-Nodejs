const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const model = new Schema({
  posts: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Model", model);
