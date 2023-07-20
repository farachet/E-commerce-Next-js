const router=require("express").Router()
const {Login , Register,profile} = require('../controllers/authcontroller')
const {validateToken}=require("../utils/JWT")




router.post("/signup",Register)
router.post("/signin",Login)
router.post("/",validateToken,profile)



module.exports=router