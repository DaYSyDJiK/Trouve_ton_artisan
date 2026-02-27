const express = require("express");
const cors = require("cors");

const categorieRoutes = require("./routes/categorie.routes");
const artisanRoutes = require("./routes/artisan.routes");
const contactRoutes = require("./routes/contact.routes");

const app = express();

app.use(cors({ origin: "http://localhost:5173" })); // front vite
app.use(express.json());

app.get("/health", (req, res) => res.json({ ok: true }));

app.use("/categories", categorieRoutes);
app.use("/artisans", artisanRoutes);
app.use("/contact", contactRoutes);

module.exports = app;