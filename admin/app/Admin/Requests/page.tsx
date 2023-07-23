"use client"
import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import axios from 'axios';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import styles from './style.module.css'
import ResponsiveDrawer from '../page';

interface Product {
  id: number;
  productname: string;
  price: number;
  reference: string;
  approved: boolean;
}

const Page = () => {
  const [rows, setRows] = useState <Product[]>([]);
  const [refrech, setrefrech] = useState(false);
  const columnsProducts: GridColDef[] = [
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
      field: 'approved',
      headerName: 'approved',
      width: 130,
    },
    {
      field: 'edit',
      headerName: 'Actions',
      width: 75,
      sortable: false,
      renderCell: (params) => (
       
        
        <Button  onClick={()=>handleUpdate(params.row.id)} variant="contained" color="success">
      Accept
    </Button>
      ),
      },
  {
    field: 'delete',
    headerName: '',
    width: 75,
    sortable: false,
    renderCell: (params) => (
     
    <Button onClick={() => deleteData  (params.row.id)} variant="outlined" color="error">
    Delete
   </Button>
    ),
    }
  ];
  const handleUpdate = async (id:Number) => { 
    try{
      const response= await axios.put(`http://localhost:3001/api/admin/updateProds/${id}`)
      if (response.status===200){
        setrefrech(!refrech)  
      } 
    }catch (error){
      console.log(error)
    }
   
  };

  useEffect(() => {
    const fetchProds = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/admin/allprods");
        console.log(response.data);

        const convertedRows = response.data.map((ele: any) => ({
          id: ele.id,
          productname: ele.productname,
          price: ele.price,
          reference: ele.reference,
          approved: ele.approved,
        }));
        console.log("converted", convertedRows);
        setRows(convertedRows);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };
    fetchProds();
  }, [refrech]);

  const deleteData  = async (id:Number) => {
    try {
     const response =  await axios.delete(`http://localhost:3002/api/admin/deleteproduct/${id}`); 
     console.log(id)
  
       if(response.status === 200){
        setrefrech(!refrech);
       }
      console.log('load data')
    } catch (error) {
      console.error(error);
    }
  }
  

  return (
    <div>
      <ResponsiveDrawer Collection={{
        name: '',
        image: ''
      }} id={0} categoryname={''} image={''} Stock={0}  />
    <div className={styles.back} >
    <div className={styles.tableheader}>List of Requests</div>
    <div className={styles.tablecontainer}>
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
     
    </div>
     </div> 
  );
};

export default Page;