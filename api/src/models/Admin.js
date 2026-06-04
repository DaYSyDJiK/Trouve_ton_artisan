const { DataTypes } = require('sequelize');
const sequelize = require("../config/database");


const Admin = sequelize.define(
    'Admin', 
    {
        id :{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        email : {
            type: DataTypes.STRING(150),
            allowNull: false,
            unique: true,
    },
        password : {
            type: DataTypes.STRING(250),
            allowNull: false,
        }
    },
    {
        tableName : "admin",
        timestamps : false,
    }
);
    

module.exports = Admin;
