const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const categorieRoutes = require("./routes/categorie.routes");
const artisanRoutes = require("./routes/artisan.routes");
const contactRoutes = require("./routes/contact.routes");

const app = express();
app.set("trust proxy", 1);

/*
  
  Sécurité HTTP
  
  Helmet ajoute automatiquement
  des headers sécurisés :
  - Protection XSS
  - Clickjacking
  - MIME sniffing
  etc.
*/
app.use(helmet());

/*
  
  Configuration CORS
  
  Autorise :
  - Local (Vite)
  - Front en production (Vercel)
*/


const allowedOrigins = [
  process.env.FRONT_URL,
  process.env.CLIENT_URL,
  "http://localhost:5173",
].filter(Boolean);

app.use(
  cors({
    origin(origin, cb) {
      // Requêtes sans origin (Postman, curl) => OK
      if (!origin) return cb(null, true);

      if (allowedOrigins.includes(origin)) return cb(null, true);

      console.log("CORS refusé pour origin =", origin);
      return cb(new Error("CORS non autorisé"));
    },
    credentials: true,
  })
);

app.options("*", cors());

// Parser JSON

app.use(express.json());

// Route de test

app.get("/health", (req, res) => res.json({ ok: true }));

// Routes principales

app.use("/categories", categorieRoutes);
app.use("/artisans", artisanRoutes);
app.use("/contact", contactRoutes);

module.exports = app;