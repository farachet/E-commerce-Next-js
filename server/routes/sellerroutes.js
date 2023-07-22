const router=require("express").Router()
const {AddSeller , getOneByid , updateSeller}=require("../controllers/sellercontroller")



router.get("/seller",AddSeller)
router.get("/getOne/:id", getOneByid)
router.put("/Update/:id", updateSeller)


module.exports=router


