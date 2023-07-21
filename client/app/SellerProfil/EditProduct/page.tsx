"use client"
import React , {useState , useEffect }from 'react'
import { Container,Box, Typography , TextField , Button } from '@mui/material'
import style from "./page.module.css";





const Edit  : React.FC = () => {

    const [productname, setProductname] = useState<string>("");
    const [price, setPrice] = useState<string>("");
    const [reference, setReference] = useState<string>("");
    const [image, setImage] = useState<string>("");
    const [status, setStatus] = useState<string>("");
    const [approved, setApproved] = useState<number>(0);
    const [sellerId, setSellerId] = useState<number>(1);


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
onClick={() => {}}
 variant="contained"
  style={{width : "20%"}}
  >Edit</Button>
       
                </Box>
        </Box>
    </Box>
    </Box>

 

  )
}

export default Edit