const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "API OK 🚀" });
});

app.listen(5000, () => {
  console.log("Serveur lancé sur le port 5000");
});