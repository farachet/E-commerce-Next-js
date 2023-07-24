const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("ecommerce", "dhia", "@Dhia12345@*", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
