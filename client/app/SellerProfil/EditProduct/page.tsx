"use client"
import React , {useState , useEffect }from 'react'
import {Box , Button } from '@mui/material'
import TextField from "@mui/material/TextField";
import style from "./page.module.css";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios"

type Props ={
  UpdateProduct : (a:number , b: string , c: number , d : string , f : string) => void
  Editt : number
  setOpenEdit: (a: boolean) => void;
  }



const Edit  : React.FC<Props> = ({UpdateProduct ,  Editt , setOpenEdit }) => {
  console.log( "edit " , Editt)
  console.log( "updateP " , UpdateProduct)

    const [productname, setProductname] = useState<string>("");
    const [price, setPrice] = useState<string>("");
    const [reference, setReference] = useState<string>("");

    const [status, setStatus] = useState<string>("");
  

    // useEffect(() => {
    //   fetchData()
    //   console.log("it works")
    // }, [])
    
    
    // const fetchData = () => {
    //   axios.get(`http://localhost:3001/api/product/getAll/1`)
    //     .then((res) => {
    //       console.log(res.data)
    //       console.log("hello")
    //       setProducts(res.data)
    //     })
    //     .catch((err) => {
    //       console.log(err)
    //     })
    // }
    
    

    const handleCloseEdit = () => {
      setOpenEdit(false)
      // fetchData()
      
    }
      

    const handleOpenEdit = () => {
      setOpenEdit(true)
    }


  

  return (
   

    <Dialog open={open} onClose={handleCloseEdit}>
    <DialogTitle>Edit Profil</DialogTitle>
    <DialogContent>
      <TextField
        autoFocus
        margin="dense"
        id="name"
        label="product name"
        type="name"
        fullWidth
        variant="standard"
       value={productname}
      onChange={(event) => setProductname(event.target.value)}
      />
      <TextField
       
        margin="dense"
        id="name"
        label="price"
        type="name"
        fullWidth
        variant="standard"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />
    
      <TextField
        autoFocus
        margin="dense"
        id="name"
        label="reference"
        type="name"
        fullWidth
        variant="standard"
        value={reference}
        onChange={(event) => setReference(event.target.value)}
      />

        <TextField
        autoFocus
        margin="dense"
        id="name"
        label="status"
        type="name"
        fullWidth
        variant="standard"
        value={status}
              onChange={(event) => setStatus(event.target.value)}
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={handleCloseEdit}>Cancel</Button>
      <Button
        onClick={() => {
          UpdateProduct( Editt , productname  , parseInt (price)  , reference , status )
          handleCloseEdit();
          // fetchData()
        }}
      >
        Edit
      </Button>
    </DialogActions>
    </Dialog> 

 

  )
}

export default Edit




