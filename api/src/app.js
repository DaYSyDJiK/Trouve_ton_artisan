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
  process.env.FRONT_URL,      // https://xxx.vercel.app
  "http://localhost:5173",
].filter(Boolean);

app.use(
  cors({
    origin(origin, cb) {
      // Postman/curl => pas d'origin
      if (!origin) return cb(null, true);

      const isExactAllowed = allowedOrigins.includes(origin);
      const isVercel = origin.endsWith(".vercel.app"); // autorise previews + prod

      // Log utile
      if (!isExactAllowed && !isVercel) {
        console.log("CORS REFUSÉ:", { origin, allowedOrigins });
        return cb(null, false); // <-- pas d'erreur throw
      }

      return cb(null, true);
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