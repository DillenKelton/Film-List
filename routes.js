const express = require("express");
const films = require("./model");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello world!");
});

module.exports = router;
