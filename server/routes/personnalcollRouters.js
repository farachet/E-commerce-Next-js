const router=require("express").Router()
const {addToFavorite,getAllFavorite,deleteFavorite}=require("../controllers/personnalcollcontroller")



router.post("/add/:clientId",addToFavorite)
router.get('/getAll',getAllFavorite)
router.delete("/delete/:productId",deleteFavorite)


module.exports=router