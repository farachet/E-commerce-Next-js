const {cart}=require("../database/models/cards")
const {Products}=require("../database/models/products")
const {Op} = require('sequelize');

module.exports={
        addToCart:(req,res)=>{
        const{productId}=req.body
        cart.create({
            productId,clientId:req.params.clientId
        })
            .then(result=>res.status(201).json(result))
            .catch(err=> res.status(500).json(err))
        },
         getClientCart:(req,res)=>{
        
         cart.findAll({where:{
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
    deleteProductFromCart:(req,res)=>{
        
        cart.destroy({where:{
            productId:req.params.productId
        }})
        .then(result=>res.status(201).json(result))
        .catch(err=> res.status(500).json(err))
    },
    deleteAllFromCart:(req,res)=>{
        cart.destroy({where:{
            clientId:req.params.clientId
        }})
        .then(result=>res.status(201).json(result))
        .catch(err=> res.status(500).json(err))
    }
}
