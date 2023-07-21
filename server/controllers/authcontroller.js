
const {client}=require("../database/models/client")
const {seller}=require("../database/models/seller")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')


module.exports={
    Register: (req,res)=>{
        console.log(req.body)
        const {firstName,lastName,email,password,image,birthday,role}=req.body
        if ( !req.body.firstName || !req.body.lastName || !req.body.email || !req.body.password  || !req.body.birthday ){
            return res.status(422).json({errr:"Please filled the field property"});
        }
        if(role==="seller"){
            bcrypt.hash(password,8)
    
            .then((hash)=>{
                console.log("password" , hash)
                seller.create({firstName,
                lastName,
                email,
                password:hash,
       
                birthday,
                role,
                }).
                    then(()=>{
                    return res.status(201).json("User registered successfuly")
                }).catch(err=>{
                        res.status(500).json({error:err}) 
                })
            })
    
        }else if(role==="client"){
            bcrypt.hash(password,8)
    
            .then((hash)=>{
                console.log("password" , hash)
                client.create({firstName,
                lastName,
                email,
                password:hash,
       
                birthday,
                role,
                }).
                    then(()=>{
                    return res.status(201).json("User registered successfuly")
                }).catch(err=>{
                        res.status(500).json({error:err}) 
                })
            })
        }
       
    },

 
    Login: async(req,res)=>{
                const {email,password,role}=req.body;
                if ( !req.body.email || !req.body.password || !req.body.role ){
                    return res.status(422).json({errr:"Please filled the field property"});
                }
                if(email)
               if(role==="seller"){
                try{
                    const existUser = await seller.findOne({where:{email:email}});
                    if (!existUser){
                    return res.status(500).json("No user found !")
                } 
                else {
                    console.log( "bcrypt" , bcrypt.compare)
                const passwordMatch = await bcrypt.compare(password,existUser.password)
        
                
                if(!passwordMatch){
                    return res.status(401).json('The password is wrong !')
                } 
            
                else {
                    
        const secretKey="ykndhd"
      
        const acsessToken =jwt.sign({
            email:req.body.email,
            password:req.body.password,
            role:req.body.role
           }, secretKey, { expiresIn: '12h', algorithm: 'HS256' }) 
          existUser.token=acsessToken
        
          const options ={
        expires :new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true
          }
          console.log(acsessToken,"acsessToken");
          res.status(201).json({acsessToken,existUser})
                 }
            }
        }
        catch (error){
            console.log(error);
            res.status(500).json("there is an error")
        }
               }else if(role==="client"){
                try{
                    const existUser = await client.findOne({where:{email:email}});
                    if (!existUser){
                    return res.status(500).json("No user found !")
                } 
                else {
                    console.log( "bcrypt" , bcrypt.compare)
                const passwordMatch = await bcrypt.compare(password,existUser.password)
                console.log("password", password)
                console.log("password USER", existUser.password)
                console.log("password match", passwordMatch)
                
                if(!passwordMatch){
                    return res.status(401).json('The password is wrong !')
                } 
            
                else {
                    
        const secretKey="ykndhd"
      
        const acsessToken =jwt.sign({
            email:req.body.email,
            password:req.body.password,
            role:req.body.role
           }, secretKey, { expiresIn: '12h', algorithm: 'HS256' }) 
          existUser.token=acsessToken
        
          const options ={
        expires :new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true
          }
          
          res.status(201).json({acsessToken,existUser})
                 }
            }
        }
        catch (error){
            console.log(error);
            res.status(500).json("there is an error")
        }
               }
    
    },    profile:async(req,res)=>{
        console.log(req.role)
        console.log(req.email)
               if(req.body.role==="client"){
                const user=await client.findOne({where:{email:req.email}})
                return res.json({Status:"success",user})
               }else if(req.body.role="seller"){
                const user=await seller.findOne({where:{email:req.email}})
                return res.json({Status:"success",user})
               }
}  
 

}

  