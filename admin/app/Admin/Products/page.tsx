"use client"
import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useState,useEffect } from 'react';
import axios from 'axios';
import styles from '../Requests/style.module.css'
import ResponsiveDrawer from '../page';

import { Button } from '@mui/material';
//import './ManageSeller.css'

const Products = () => {
    const [rows, setRows] = useState <Product[]>([]);
 
    interface Product {
        id: number;
        productname: string;
        price: number;
        reference: string;
        
      }
const columnsProducts = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'productname', headerName: 'productname', width: 130 },
  { field: 'price', headerName: 'price', width: 130 },
  {
    field: 'reference',
    headerName: 'reference',
    type: 'text',
    width: 130,
  },
  {
    field: 'delete',
    headerName: 'Actions',
    width: 80,
    sortable: false,
    renderCell: (params:any) => (
     <Button onClick={() => deleteData  (params.row.id)} variant="outlined" color="error">
          Delete
         </Button>
    ),
    }
   
];
const deleteData = async (id:Number) => {
  try {
   const response =  await axios.delete(`http://localhost:3001/api/admin/deleteproduct/${id}`); 
   console.log(id)

     if(response.status === 200){
      window.location.reload();
     }
    console.log('load data')
  } catch (error) {
    console.error(error);
  }
}
//const [productsRows,setRows]=useState([])


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/admin/allProduct'); 
         console.log(response.data)
       
         const convertedRows = response.data.map((ele: any) => ({
            id: ele.id,
            productname: ele.productname,
            price: ele.price,
            reference: ele.reference,
          }));
          setRows(convertedRows);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [])
  return (
    <div>
    <div className= {styles.tableheader}>List of Products</div>
    <div className= {styles.tablecontainer}>
      <DataGrid
        rows={rows}
        columns={columnsProducts}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        // checkboxSelection
      />
    </div>
    <ResponsiveDrawer Collection={{
              name: '',
              image: ''
          }} id={0} categoryname={''} image={''} Stock={0}/>
  </div>
  
  )
}

export default Products