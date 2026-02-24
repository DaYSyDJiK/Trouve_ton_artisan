require("dotenv").config();
const app = require("./src/app");
const { sequelize } = require("./src/models");

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Connecté à la base MySQL");

    app.listen(PORT, () => {
      console.log(`✅ API lancée sur http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Erreur connexion DB :", error.message);
  }
})();