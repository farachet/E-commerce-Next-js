const {category}= require('../database/models/category')
module.exports= {
    AddCategory:(req,res)=>{
        category.create({})
    }
}