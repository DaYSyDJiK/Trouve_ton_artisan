const router = require("express").Router();
const { Op } = require("sequelize");
const { Artisan, Specialite, Categorie } = require("../models");

// /artisans/top
router.get("/top", async (req, res) => {
    try {
        const top = await Artisan.findAll({
            where: { isTop: true },
            limit: 3,
            order: [["note", "DESC"]],
            include: [
                {
                    model: Specialite,
                    attributes: ["id", "nom"],
                    include: [{ model: Categorie, attributes: ["id", "nom"] }],
                },
            ],
        });

        res.json(top);
    } catch (e) {
        console.error(" /artisans error:", e);
        res.status(500).json({ message: "Erreur serveur", error: e.message });
    }
});

// /artisans?search=xxx
router.get("/", async (req, res) => {
    try {
        const { search } = req.query;

        const where = {};
        if (search) {
            where.nom = { [Op.like]: `%${search}%` };
        }

        const artisans = await Artisan.findAll({
            where,
            include: [
                {
                    model: Specialite,
                    attributes: ["id", "nom"],
                    include: [{ model: Categorie, attributes: ["id", "nom"] }],
                },
            ],
            order: [["nom", "ASC"]],
        });

        res.json(artisans);
    } catch (e) {
        console.error(" /artisans error:", e);
        res.status(500).json({ message: "Erreur serveur", error: e.message });
    }
});

// /artisans/:id
router.get("/:id", async (req, res) => {
    try {
        const artisan = await Artisan.findByPk(req.params.id, {
            include: [
                {
                    model: Specialite,
                    attributes: ["id", "nom"],
                    include: [{ model: Categorie, attributes: ["id", "nom"] }],
                },
            ],
        });

        if (!artisan) return res.status(404).json({ message: "Introuvable" });

        res.json(artisan);
    } catch (e) {
        console.error(" /artisans error:", e);
        res.status(500).json({ message: "Erreur serveur", error: e.message });
    }
});

router.get("/debug/columns", async (req, res) => {
  try {
    const [rows] = await Artisan.sequelize.query("SHOW COLUMNS FROM artisan;");
    res.json(rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;