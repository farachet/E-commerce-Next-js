const { client } = require('../database/models/client')
const {posts}= require('../database/models/posts')
module.exports= {
    getUserPosts:(req,res)=>{
        posts.findAll({where:{
            clientId:req.params.clientId
        },include:{model:client,as:"client"},order:[['createdAt', 'DESC']]})
        .then(result=>res.status(200).json(result))
        .catch(err=>res.status(500).json(err))
    },

    createPost:(req,res)=>{
        const {content,image}=req.body
        posts.create({content,image,clientId:req.params.clientId})
        .then(result=>res.status(201).json(result))
        .catch(err=>res.status(500).json(err))
    },
    updatePost:(req,res)=>{
        posts.update(req.body,{where:{
            id:req.params.postId
        }})
        .then(result=>res.status(201).json(result))
        .catch(err=>res.status(500).json(err))
    },
    deletePost:(req,res)=>{
        posts.destroy({where:{
            id:req.params.postId
        }})
        .then(result=>res.status(201).json(result))
        .catch(err=>res.status(500).json(err))
    },
    getAllPosts:(req,res)=>{
        posts.findAll({include:{model:client,as:"client"},order: [['createdAt', 'DESC']]})

        .then(result=>res.status(201).json(result))
        .catch(err=>res.status(500).json(err))
    }
}