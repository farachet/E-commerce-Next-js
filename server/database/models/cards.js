const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configdb');
const {client}=require('./client')


const cart = sequelize.define('cart', {
    id: {
      type:DataTypes.INTEGER,
      autoIncrement : true,
      primaryKey:true
        },
        productId:{
          type:DataTypes.INTEGER,
          allowNull:false
        }
      },{
        timestamps:false
      })
  client.hasMany(cart)
  cart.belongsTo(client)

  
  module.exports = {
        cart 
};