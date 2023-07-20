const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configdb');
const {client}=require('./client')

const posts = sequelize.define('posts', {
    id: {
      type:DataTypes.INTEGER,
      autoIncrement : true,
      primaryKey:true
        },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
   
  })
  client.hasMany(posts, {
    foreignKey: "clientId",
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  },{ timestamps: false });
  posts.belongsTo(client);
  module.exports = {
    posts  };