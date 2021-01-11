const mongoose = require("mongoose");

const filmSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  releaseYear: {
    type: String,
    required: true,
  },
  dateWatched: {
    type: String,
    required: true,
  },
  blame: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model("Film", filmSchema);
