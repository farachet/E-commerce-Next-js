"use client"
import React, { useState, useEffect } from 'react';
import style from "./page.module.css"
import { Box, Input, Button , TextField } from "@mui/material";
import axios, { AxiosResponse } from 'axios';



interface Product {
  id: number;
  productname: string;
  price: number;
  reference : string;
  image : string ;
  status : string ;
  
}






const AddProducts : React.FC= ()  =>  {


  const [productname, setProductname] = useState("");
  const [price, setPrice] = useState("");
  const [reference, setReference] = useState("");
  const [image, setImage] = useState("");
  const [status, setStatus] = useState("");
  const [approved, setApproved] = useState(0);
  const [sellerId, setSellerId] = useState(2);

  
  const AddProduct = () => {
     

    axios.post("http://localhost:3001/api/product/AddProduct" , {
      productname : productname ,
      price : price ,
      reference : reference , 
      image : image ,
      status : status ,
      approved : approved ,
      sellerId : sellerId 
    })
    .then((res : any ) => {
console.log(res.data)
    })
    .then(err => {
      console.log(err)
    })

  }


  return (


  
    <Box className="box2">
      <Box className="Card" style={{ position: "relative" }}>
        <Box
          className="Rectangle24"
          style={{
            width: 300,
            height: 1204,

            background: "rgba(255, 255, 255, 0.10)",
            boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.15)",
            borderRadius: 10,
          }}
        >

                  <Box sx={{display:"flex",flexDirection:"column"}}>
            <TextField 
              value={productname}
              onChange={(event) => setProductname(event.target.value)}
            label={'type product name'} 
            id="margin-none"   
            style={{marginTop : 80}}
             />

            <TextField
                   value={price}
                   onChange={(event) => setPrice(event.target.value)}
            sx={{color : "white"}}
             label={'type product price '} 
             id="margin-dense" 
             
             margin="dense" />
            <TextField 
             value={reference}
             onChange={(event) => setReference(event.target.value)}
            label={'type product reference '}
             id="margin-none"
               />

          <TextField 
          value={image}
          onChange={(event) => setImage(event.target.value)}
          label={'type product image'} 
          id="margin-dense"
           margin="dense" 
           />

<TextField 
          value={status}
          onChange={(event) => setStatus(event.target.value)}
          label={'type product status'} 
          id="margin-dense"
           margin="dense" 
           />

<Button
onClick={() => {AddProduct()}}
 variant="contained"
  style={{width : "20%"}}
  >Add</Button>
       
                </Box>
        </Box>
    </Box>
    </Box>

  )
}

export default AddProducts