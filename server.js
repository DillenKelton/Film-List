const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();
const port = process.env.PORT || 3000;

// Load environmental variables
require("dotenv").config();

// Connect to the database
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.ny5dv.mongodb.net/filmlist?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

// Start listening for connections to the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Body parser
app.use(express.json());

// Use routes
app.use("/", routes);
