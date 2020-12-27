const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();
const port = process.env.PORT || 3000;

// Connects to the database
mongoose
  .connect("TODO", { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

// Starts listening for connections to the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Uses routes
app.use("/", routes);
