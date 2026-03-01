const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const categorieRoutes = require("./routes/categorie.routes");
const artisanRoutes = require("./routes/artisan.routes");
const contactRoutes = require("./routes/contact.routes");

const app = express();

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
  "http://localhost:5173",
  process.env.FRONT_URL, // URL Vercel en production
].filter(Boolean); // enlève les valeurs undefined

app.use(
  cors({
    origin: function (origin, callback) {
      // autorise les requêtes sans origin (Postman, curl)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS non autorisé"));
      }
    },
  })
);

// Parser JSON

app.use(express.json());

// Route de test

app.get("/health", (req, res) => res.json({ ok: true }));

// Routes principales

app.use("/categories", categorieRoutes);
app.use("/artisans", artisanRoutes);
app.use("/contact", contactRoutes);

module.exports = app;