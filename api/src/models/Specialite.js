const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Specialite = sequelize.define(
  "Specialite",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nom: { type: DataTypes.STRING(100), allowNull: false },


    categorieId: { type: DataTypes.INTEGER, allowNull: false, field: "categorie_id" },
  },
  {
    tableName: "specialite",
    timestamps: false,
  }
);

module.exports = Specialite;