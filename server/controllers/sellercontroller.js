const {seller}= require('../database/models/seller')
module.exports= {
    AddSeller:(req,res)=>{
        seller.create({})
    },

    updateSeller:(req,res)=>{
        console.log(req.params.sellerId)
        seller.update(req.body.firstName , req.body.lastName , {where:{id:req.params.id}})
        .then(result =>
         res.status(201).json(result)
         )
        .catch(err=> 
        res.status(500).json(err)
        )
    },

}