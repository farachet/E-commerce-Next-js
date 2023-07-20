const router=require("express").Router()
const {AddSeller}=require("../controllers/sellercontroller")



router.get("/seller",AddSeller)


module.exports=router