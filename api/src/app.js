const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const categorieRoutes = require("./routes/categorie.routes");
const artisanRoutes = require("./routes/artisan.routes");
const contactRoutes = require("./routes/contact.routes");

const app = express();

// Helmet = headers de sécurité HTTP
// Protège contre XSS, clickjacking, sniffing, etc.

app.use(helmet());

// CORS restreint
// Autorise uniquement ton front à appeler l'API

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
  })
);

 // Parser JSON

app.use(express.json());

// Route health (test API)

app.get("/health", (req, res) => res.json({ ok: true }));

// Routes principales

app.use("/categories", categorieRoutes);
app.use("/artisans", artisanRoutes);
app.use("/contact", contactRoutes);

module.exports = app;