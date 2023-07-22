const {verify}=require("jsonwebtoken")
const validateToken=(req,res,next)=>{
    
    const accessToken=req.body.token

    console.log(accessToken)

    if(!accessToken){
        res.json({Message:"user not authenticated"})
    }else{
            verify(accessToken,"ykndhd",(err,d)=>{
                if(err){
                    return res.json({Message:"Authentication Error"})
                }else{
                     req.role=d.role
                     req.email=d.email
                     
                     next()
                }
            })
    }
}

module.exports={
    validateToken
}