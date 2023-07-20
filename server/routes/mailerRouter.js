const router=require("express").Router()
const {sendMail}=require("../controllers/MailerController")

router.post("/sendMail",sendMail)    

module.exports=router