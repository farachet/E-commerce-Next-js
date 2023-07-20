
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configdb');
const {client}=require('./client')
        
        
const personalcollection = sequelize.define('personalcollection', {
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
          client.hasMany(personalcollection)
          personalcollection.belongsTo(client)
        
          
          module.exports = {
            personalcollection 
        };