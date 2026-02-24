const router = require("express").Router();
const { Categorie } = require("../models");

router.get("/", async (req, res) => {
  try {
    const categories = await Categorie.findAll({
      attributes: ["id", "nom"],
      order: [["nom", "ASC"]],
    });
    res.json(categories);
  } catch (e) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});


module.exports = router;