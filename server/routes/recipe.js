const express = require("express");
const shortId = require("shortid");
const router = express.Router();

const Recipe = require("../models/Recipe");

// GET ALL RECIPES
router.get("/", (req, res) => {
  Recipe.find({})
    .select("-history")
    .sort({ date: -1 })
    .then(recipes => res.json(recipes))
    .catch(() => res.status(404).json({ msg: "Cannot find recipes" }));
});

// GET RECIPE BY ID
router.get("/:id", (req, res) => {
  Recipe.findOne({ id: req.params.id })
    .then(recipe => res.json(recipe))
    .catch(() => res.status(404).json({ msg: "Cannot find recipe" }));
});

// CREATE NER RECIPE
router.post("/", (req, res) => {
  const { text, title } = req.body;
  const recipe = new Recipe({
    id: shortId.generate(),
    text,
    title,
    history: {
      text,
      title
    }
  });

  recipe
    .save()
    .then(recipe => res.json(recipe))
    .catch(() => res.status(400).json({ msg: "Please enter all field" }));
});

// UPDATE RECIPE
router.put("/", async (req, res) => {
  const { text, title, id } = req.body;

  Recipe.findOneAndUpdate(
    { id },
    {
      text,
      title,
      $push: { history: { text, title } }
    }
  )
    .then(() => res.json({ status: "success" }))
    .catch(() => res.status(400).json({ msg: "Please enter all field" }));
});

// DELETE RECIPE
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Recipe.findOneAndDelete({ id })
    .then(() => res.json({ status: "success", id }))
    .catch(() => res.status(404).json({ msg: "Cannot remove recipe" }));
});

module.exports = router;
