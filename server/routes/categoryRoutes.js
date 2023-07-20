const router=require("express").Router()
const {AddCategory}=require("../controllers/categorycontroller")



router.get("/category",AddCategory)


module.exports=router