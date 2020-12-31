const express = require("express");
const Film = require("./model");
const router = express.Router();

// @desc Gets all films
router.get("/", async (req, res) => {
  res.send("hello world!");
});

// @desc Gets a film using its id
router.get("/:id", async (req, res) => {
  try {
    const film = await Film.findById(req.params.id);
    if (film) {
      res.status(200).send(film);
    } else {
      res.status(404).send("Film does not exist");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

// @desc Adds a new film to the database
router.post("/addFilm", async (req, res) => {
  try {
    const newFilm = await Film.create(req.body);
    res.status(201).send(newFilm);
  } catch (error) {
    res.status(400).send(error);
  }
});

// @desc Removes a film from the database using its id
router.delete("/:id", async (req, res) => {
  try {
    const film = await Film.findById(req.params.id);
    if (film) {
      await film.delete();
      res.send(film);
    } else {
      res.status(404).send("Film does not exist");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
