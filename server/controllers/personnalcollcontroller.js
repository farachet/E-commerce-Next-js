const {personalcollection}=require("../database/models/personalcollections")
const {Products}=require("../database/models/products")
const {  Op } = require('sequelize');

module.exports={
        addToFavorite:(req,res)=>{
        const{productId}=req.body
        personalcollection.create({
            productId,clientId:req.params.clientId
        })
            .then(result=>res.status(201).json(result))
            .catch(err=> res.status(500).json(err))
    },
    getAllFavorite:(req,res)=>{
        personalcollection.findAll({where:{
            clientId:req.params.clientId
         }}).then((result=>{
                const productIds=result.map(ele=>ele.productId)
                Products.findAll({
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
    deleteFavorite:(req,res)=>{
        
        personalcollection.destroy({
            where:{
                productId:req.params.productId
            }
        })
        .then(result=>res.status(201).json(result))
        .catch(err=> res.status(500).json(err))
    }
}