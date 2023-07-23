const router=require("express").Router()
const {AddSeller , getOneByid , updateSeller , updateSellerImage}=require("../controllers/sellercontroller")



router.get("/seller",AddSeller)
router.get("/getOne/:id", getOneByid)
router.put("/Update/:id", updateSeller)
router.put("/UpdateImage/:id", updateSellerImage)


module.exports=router


