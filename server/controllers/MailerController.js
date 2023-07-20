const nodemailer = require('nodemailer');
const {admin}=require("../database/models/admin")


const mailer = nodemailer.createTransport({
    service: 'yahoo',
    auth: {
      user: 'rafikmhadhbi@yahoo.fr',
      pass: 'pvlzkdjalmylxcii',
    },
  });


module.exports={
    sendMail:(req,res)=>{
        const {password} = req.body;

        const mail = {
            from: 'rafikmhadhbi@yahoo.fr',
            to: "rafikmhadhbi01@gmail.com",
            subject: 'Admin Password',
            html: `${password}`
          };
          mailer.sendMail(mail,(err,data)=>{
            if (err) res.status(500).json({ message: 'Error sending email',err:err })
            else res.status(200).json({ message: 'Reservation email sent successfully' })
          })
          admin.update({password:password},{where:{
            id:1
          }})
          .then(result=>res.status(201).json(result))
          .catch(err=> res.status(500).json(err))

    }

}