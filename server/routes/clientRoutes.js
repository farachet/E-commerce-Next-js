const router=require("express").Router()
const {updateClient,deleteClient,getClient}=require("../controllers/clientController")



router.put("/edit/:clientId",updateClient)
router.delete("/delete/:clientId",deleteClient)
router.get("/getClient/:id",getClient)


module.exports=router