const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Artisan = sequelize.define(
  "Artisan",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nom: { type: DataTypes.STRING(150), allowNull: false },
    note: { type: DataTypes.DECIMAL(2, 1), allowNull: false },
    ville: { type: DataTypes.STRING(100), allowNull: false },

    // en BDD c'est "description"
    description: { type: DataTypes.TEXT, allowNull: false },

    email: { type: DataTypes.STRING(150), allowNull: false },

    // en BDD c'est "site_web"
    siteWeb: { type: DataTypes.STRING(255), allowNull: true, field: "site_web" },

    // en BDD c'est "image"
    image: { type: DataTypes.STRING(255), allowNull: true },

    // en BDD c'est "is_top"
    isTop: { type: DataTypes.BOOLEAN, allowNull: false, field: "is_top", defaultValue: false },

    // en BDD c'est "specialite_id"
    specialiteId: { type: DataTypes.INTEGER, allowNull: false, field: "specialite_id" },
  },
  {
    tableName: "artisan",
    timestamps: false,
  }
);

module.exports = Artisan;