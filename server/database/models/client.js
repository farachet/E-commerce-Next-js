const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configdb');

const client = sequelize.define('client', {
  id : {
   type:DataTypes.INTEGER,
   autoIncrement : true,
   primaryKey:true
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  
  image: {
    type: DataTypes.STRING,
    allowNull: true
  },
  birthday: {
    type: DataTypes.DATE,
    allowNull: true
  },
  role:{
    type: DataTypes.STRING,
    allowNull: false
  }
  
},{ timestamps: false })


module.exports = {
    client };