const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configdb');
const {seller}=require("./seller")
const {category}=require("./category")

const Products = sequelize.define ('Products',{
       id:{
        type:DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey:true
       },
      productname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        
      },
      reference: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false
      },
      approved : {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }
  },{ timestamps: false })
  seller.hasMany(Products, {
    foreignKey: 'sellerId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  });
  Products.belongsTo(seller)
  
  category.hasMany(Products, {
    foreignKey: 'categoryId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  });
  Products.belongsTo(category)
  


  module.exports = {
    Products  };