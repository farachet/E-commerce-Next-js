const {seller}= require('../database/models/seller')
module.exports= {
    AddSeller:(req,res)=>{
        seller.create({})
    }
}