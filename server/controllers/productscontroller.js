const {Products}= require('../database/models/products')
const {category}=require("../database/models/category")
const {cart}=require("../database/models/cards")
const {Op} = require('sequelize');

module.exports = {
  AddProducts: (req, res) => {
    console.log(req.body.category)
    Products.create({
      productname: req.body.productname,
      price: req.body.price,
      reference: req.body.reference,
      image: req.body.image,
      status: "active",
      approved: 0,
      sellerId: req.body.sellerId,
      categoryId:req.body.categoryId
      
      
    })
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },

  getAllProducts: (req, res) => {
    Products.findAll({where : {sellerId : req.params.sellerId } })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
  getAllProductsByName: (req, res) => {
    Products.findAll({where : {productname : req.params.productname} })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },

  UpdateProduct: (req, res) => {
    const id = req.params.id;
    const productname = req.body.productname;
    const price = req.body.price;
    const reference = req.body.reference;

    Products.update(
      {
        productname: productname,
        price: price,
        reference: reference,
      },
      {
        where: {
          id: id
        }
      }
    )
      .then((result) => {
        res.status(204).send(result);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },

  deleteAll: (req, res) => {
    Products.destroy({ where: {id : sellerId}})
      .then(() => {
        res.status(204).send('deleted');
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },

  deleteById: (req, res) => {
    const id = req.params.id;
    Products.destroy({ where: { id } })
      .then(() => {
        res.status(204).send([]);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
  getAllProductss:(req,res)=>{
    Products.findAll({include:[{ model: category, as: 'category' }]})
    .then(result=>{
        res.status(200).send(result)
    })
    .catch(err=>{
      res.status(500).send(err)
    })
  },
  updateStatus:(req,res)=>{
      console.log(req.params.clientId)
    cart.findAll({where:{
       clientId:req.params.clientId
    }}).then((result=>{
           const productIds=result.map(ele=>ele.productId)
           Products.update({ status: 'selled' },{
            
               where:{
                  id:{
                      [Op.in]:productIds
                  }
              }
          })
          .then(result=>res.status(201).json(result))
          .catch(err=> res.status(500).json(err))
           
    })).catch(err=>res.status(500).json(err))
 

  
},
};