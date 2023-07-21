"use client"
import React, { useState, useEffect } from 'react';
import style from "./page.module.css"
import { Box, Button,  Avatar , IconButton , Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete'
import axios, { AxiosResponse } from 'axios';

interface Product {
  id: number;
  productname: string;
  price: number;
  reference : string;
  image : string ;
  status : string ;
}

const Products: React.FC = ()  =>  {

    const [data, setData] = useState<Product[]>([]);
    const [show, setShow] = useState<boolean>(false);

    useEffect(() => {
        fetch();
      }, []);

    const fetch = () => {
        axios
        .get(`http://localhost:3001/api/product/getAll/1`)
          .then((res) => {
            console.log(res.data)
            setData(res.data)
          })
          .catch((err) => {
            console.log(err)
          })
      }

      const deleteProduct = (id : number) => {
axios.delete(`http://localhost:3001/api/product/deleteByid/${id}`)
.then(() => {
  fetch()
})
.catch((err) => {
  console.log(err)
})
  }




  return (
    <Box className={style.parent} >
    {data.map((el) => (
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
          marginLeft : 20
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
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete">
            <DeleteIcon onClick={() => {deleteProduct(el.id)}}/>
          </IconButton>
        </Box>
      </Box>
    ))}
    
  </Box>
 

  )
}

export default Products