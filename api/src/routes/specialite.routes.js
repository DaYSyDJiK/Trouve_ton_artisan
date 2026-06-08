const express = require("express");
const router = express.Router();
const { Specialite } = require("../models");

router.get("/", async (req, res) => {
  try {
    const specialites = await Specialite.findAll();
    res.json(specialites);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

module.exports = router;