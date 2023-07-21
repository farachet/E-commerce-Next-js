"use client"
import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useState,useEffect } from 'react';
import axios from 'axios';

import { Button } from '@mui/material';
import styles from '../Requests/style.module.css'



const ManageSellers = () => {
  const columnsSeller = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'email',
      headerName: 'email',
      width: 250,
    },
    {
    field: 'delete',
    headerName: 'Actions',
    width: 75,
    sortable: false,
    renderCell: (params) => (
      <Button onClick={() => deleteData  (params.row.id)} variant="outlined" color="error">
      Delete
     </Button>
    ),
    }
];

const deleteData = async (id:Number) => {
  try {
   const response =  await axios.delete(`http://localhost:3002/api/admin/deleteSeller/${id}`); 
   console.log(id)

     if(response.status === 200){
        setrefrech(!refrech);
     }
    console.log('load data')
  } catch (error) {
    console.error(error);
  }
}
    const [sellerRows,setsellerRows]=useState([])
    const [refrech, setrefrech] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:3002/api/admin/AllSellers'); 
             console.log(response.data)
             const convertedRows = response.data.map((ele:any) => ({
                id: ele.id ,
                firstName: ele.firstName,
                lastName: ele.lastName,
                email: ele.email,
                
              }));
              console.log("converted", convertedRows);
              setsellerRows(convertedRows);
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchData();
      }, [refrech])
 
  return (
    <div >
  <div className={styles.tableheader}>List of Sellers</div>
  <div className={styles.tablecontainer}>
    <DataGrid
      rows={sellerRows}
      columns={columnsSeller}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[5, 10]}
      // checkboxSelection
    />
  </div>
</div>
  )
}

export default ManageSellers