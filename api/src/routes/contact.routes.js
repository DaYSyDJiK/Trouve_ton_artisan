const router = require("express").Router();
const { Artisan } = require("../models");
const { sendMail } = require("../services/mailer");
const rateLimit = require("express-rate-limit");


function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 5, // 5 requêtes
  message: { message: "Trop de tentatives, réessayez plus tard." },
});

router.post("/", contactLimiter, async (req, res) => {
  console.log("POST /contact body =", req.body);
  try {
    const { name, email, subject, message, artisanId } = req.body;

    // 1) validations simples
    if (!name || !email || !subject || !message || !artisanId) {
      return res.status(400).json({ message: "Champs manquants" });
    }
    if (!isEmail(email)) {
      return res.status(400).json({ message: "Email invalide" });
    }

    // 2) retrouver l’artisan (pour connaître son email)
    const artisan = await Artisan.findByPk(artisanId);
    if (!artisan) {
      return res.status(404).json({ message: "Artisan introuvable" });
    }

    // 3) préparer le mail
    const mailText =
      `Nouveau message depuis "Trouve ton artisan"\n\n` +
      `Artisan : ${artisan.nom} (id=${artisan.id})\n` +
      `Nom : ${name}\n` +
      `Email : ${email}\n` +
      `Objet : ${subject}\n\n` +
      `Message :\n${message}\n`;

    // 4) envoyer à l’email de l’artisan
    await sendMail({
      to: artisan.email,
      subject: `[Trouve ton artisan] ${subject}`,
      text: mailText,
      replyTo: email,
    });

    return res.json({ ok: true, message: "Email envoyé" });
  } catch (e) {
    console.error("POST /contact error:", e);
res.status(500).json({ message: "Erreur serveur", error: e.message });
  }
});

module.exports = router;