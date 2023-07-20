const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configdb');

const admin = sequelize.define('admin', {
  id: {
    type:DataTypes.INTEGER,
    autoIncrement : true,
    primaryKey:true
      },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },

},{ timestamps: false })

  module.exports = {
    admin };