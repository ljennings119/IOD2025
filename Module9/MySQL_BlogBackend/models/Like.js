const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Like = sequelize.define(
  "Like",
  {},
  { tableName: "likes" }
);

module.exports = Like;
