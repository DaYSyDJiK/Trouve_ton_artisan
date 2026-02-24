const sequelize = require("../config/database");

const Categorie = require("./Categorie");
const Specialite = require("./Specialite");
const Artisan = require("./Artisan");

// Catégorie -> Spécialités (à valider selon le vrai nom de colonne FK)
Categorie.hasMany(Specialite, { foreignKey: "categorie_id" });
Specialite.belongsTo(Categorie, { foreignKey: "categorie_id" });

// Spécialité -> Artisans (confirmé par ta table artisan)
Specialite.hasMany(Artisan, { foreignKey: "specialite_id" });
Artisan.belongsTo(Specialite, { foreignKey: "specialite_id" });

module.exports = { sequelize, Categorie, Specialite, Artisan };