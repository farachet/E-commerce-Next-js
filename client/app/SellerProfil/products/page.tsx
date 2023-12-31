"use client"
import React, { useState, useEffect , useContext} from 'react';
import style from "./page.module.css"
import { Box, Button,  Avatar , IconButton , Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ecommerceContext } from "@/app/Context/ecommerce";
import axios  from 'axios';

interface Product {
  id: number;
  productname: string;
  price: number;
  reference : string;
  image : string ;
  status : string ;
}

type Props = {

HandleEdit : (a:number) => void
setOpenEdit : (a:boolean) => void
products:Product[]

}
const Products: React.FC<Props>= ({ HandleEdit , setOpenEdit,products})  =>  {
  const {user,handleAddProduct}=useContext(ecommerceContext)
  console.log("currrentUser",user)
    const [data, setData] = useState<Product[]>([]);
    const [openn, setOpenn] = React.useState(false);
    const [playSound, setPlaySound] = React.useState(false);

    const handleClickOpen = () => {
      setOpenn(true);
    }
  
    const handleClose = () => {
      setOpenn(false)
    }

  
    const handleCloseEdit = () => {
      setOpenEdit(false)
    }
    

 



   


      const deleteProduct = (id : number) => {
axios.delete(`http://localhost:3001/api/product/deleteByid/${id}`)
.then(() => {
  handleAddProduct()
})
.catch((err) => {
  console.log(err)
})
  }

  const handleDelete = (id: number) => {
    setPlaySound(true)
    setTimeout(() => {
      deleteProduct(id)
    }, 1000)
  }


  return (
    <Box className={style.parent} >
    {products.map((el) => (
      <Box
        key={el.id} 
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          width: '284px',
          height: '434px',
          padding: '10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          marginLeft : 9
        }}
      >
        <Avatar
          src={el.image}
          alt="image"
          sx={{ width: '246px', height: '277px', borderRadius: '8px', marginTop: '10px' }}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            color: 'rgba(255, 255, 255, 0.6)',
            width: '246px',
          }}
        >
          <Typography variant="subtitle2" sx={{ fontSize: '18px' }}>
            Secret Rare
          </Typography>
          <Typography>
            {el.reference}
            </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: '10px', width: '246px', color: 'white' }}>
          <Typography variant="h4" sx={{ fontSize: '18px', fontWeight: 'bold' }}>
            {el.productname}
          </Typography>
          <Typography>{el.price}</Typography>

          <IconButton aria-label="edit">
            <EditIcon  onClick={()=> {
              HandleEdit(el.id)
            
              console.log(el.id)

              
              }} />
          </IconButton>

          <Box>
      <Dialog
        open={openn}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Time to Part Ways And Let the Glow Go : Farewell Product! 👋"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Hey there, brave soul! Are you absolutely, positively, 100% sure you want to bid farewell to this 
          product and send it into the abyss of oblivion? 🤔 Think twice, for once it's gone, it might stage
           a digital comeback and haunt your dreams! But hey, if you're resolute, let's give it a one-way ticket 
           to the cyber afterlife! 🚀💻 Who knows what adventures await it in the great beyond? 🌌🏠
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Nah-uh!🙅‍♂️😆</Button>
          <Button onClick={() => {
deleteProduct(el.id)
 setPlaySound(true)
            handleClose()
            
            }} autoFocus>
            Brilliant! 👍😄
          </Button>
        </DialogActions>
      </Dialog>


          </Box>
          <IconButton onClick={() => {
              handleClickOpen()
              
              }} aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Box>
        {playSound && (
                <audio
                  autoPlay
                  src="/sound/deleted.wav"
                  onEnded={() => setPlaySound(false)}
                />
              )}
      </Box>
    ))}
    
  </Box>
 

  )
}

export default Products