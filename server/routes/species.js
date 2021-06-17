const express = require("express");
const species = require("../models/species");
const router = express.Router();
const Species = require("../models/species");

//Getting all
router.get("/", async (req, res) => {
  try {
    const species = await Species.find();
    res.send(species);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//Getting one
router.get("/:id", getSpecies, (req, res) => {
  res.send(res.species.name);
});
//create
router.post("/", async (req, res) => {
  const species = new Species({
    name: req.body.name,
    category: req.body.category,
  });
  try {
    const newSpecies = await species.save();
    res.status(201).json(newSpecies);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
//update
router.patch("/:id", getSpecies, async (req, res) => {
  if (req.body.name != null) {
    res.species.name = req.body.name;
  }
  if (req.body.category != null) {
    res.species.category = req.body.category;
    try {
      const updatedSpecies = await res.species.save();
      res.json(updatedSpecies);
    } catch (error) {
      res.status(400).json({ message: error.message+'bobo' });
    }
  }
});
//delete
router.delete("/:id", getSpecies, async (req, res) => {
  try {
    await res.species.remove();
    res.json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

async function getSpecies(req, res, next) {
  let species;
  try {
    species = await Species.findById(req.params.id);
    if (species == null) {
      return res.status(404).json({ message: "Cannot find species" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.species = species;
  next();
}
module.exports = router;
