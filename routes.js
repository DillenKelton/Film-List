const express = require("express");
const Film = require("./model");
const router = express.Router();

router.get("/", async (req, res) => {
  res.send("hello world!");
});

router.post("/addFilm", async (req, res) => {
  try {
    const newFilm = await Film.create(req.body);
    res.send(newFilm);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
