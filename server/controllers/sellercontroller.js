const {seller}= require('../database/models/seller')
module.exports= {
    AddSeller:(req,res)=>{
        seller.create({})
    },

    updateSeller:(req,res)=>{
        const Updated = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
          }
        seller.update(Updated , {where:{id:req.params.id}})
        .then(result =>
         res.status(201).json(result)
         )
        .catch(error=> 
        res.status(500).json(error)
        )
    },

    updateSellerImage:(req,res)=>{
      const Updated = {
          image: req.body.image,
          
        }
      seller.update(Updated , {where:{id:req.params.id}})
      .then(result =>
       res.status(201).json(result)
       )
      .catch(error=> 
      res.status(500).json(error)
      )
  },

   getOneByid : (req,res) => {
        seller.findAll({where : {id : req.params.id } })
          .then((result) => {
            res.json(result);
          })
          .catch((err) => {
            res.status(500).send(err);
          });
    }

 
}