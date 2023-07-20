const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("ecommerce", "root", "firemanfireman@@", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
