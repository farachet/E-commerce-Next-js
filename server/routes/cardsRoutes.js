const router=require("express").Router()
const {addToCart,getClientCart,deleteProductFromCart,deleteAllFromCart}=require("../controllers/cardscontroller")



router.post("/add/:clientId",addToCart)
router.get("/getAll/:clientId",getClientCart)
router.delete("/delete/:productId",deleteProductFromCart)
router.delete("/deleteAll/:clientId",deleteAllFromCart)




module.exports=router