const mongoose = require("mongoose");

const filmSchema = new mongoose.Schema({
  name: String,
  releaseYear: String,
  dateWatched: String,
  blame: String,
  poster: String,
  tags: [String],
});

module.exports = mongoose.model("Films", filmSchema);
