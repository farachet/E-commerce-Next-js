const {client}= require('../database/models/client')

module.exports= {
    updateClient:(req,res)=>{
        const {firstName,lastName,email,birthday}=req.body
        console.log(req.params.clientId)
        client.update(req.body,{where:{
            id:req.params.clientId
    }}).then(result=>res.status(201).json(result))
        .catch(err=> res.status(500).json(err))
    },
    deleteClient:(req,res)=>{
        client.destroy({where:{id:req.params.id}})
        .then(result=>res.status(201).json(result))
        .catch(err=> res.status(500).json(err))
    },getClient:(req,res)=>{
        client.findAll({where:{
            id:req.params.id
        }})
        .then(result=>res.status(201).json(result))
        .catch(err=> res.status(500).json(err))
    }
}