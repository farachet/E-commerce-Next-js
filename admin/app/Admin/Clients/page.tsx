'use client'
import  React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState,useEffect } from 'react';
import axios from 'axios'
import { Button } from '@mui/material';
import styles from '../Requests/style.module.css'
  

 


const ManageClient : React.FC = () => {
  const columnsClient = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 150},
    { field: 'lastName', headerName: 'Last name', width: 150 },
    {
      field: 'email',
      headerName: 'email',
      width: 250,
    },
    {
      field: 'delete',
      headerName: 'actions',
      width: 75,
      sortable: false,
      renderCell: (params:any) => (
        <Button onClick={() => deleteData  (params.row.id)} variant="outlined" color="error">
        Delete
       </Button>
      ),
    },
   
  ];
  const [rows, setclientRows] = useState([]);
  const [refrech, setrefrech] = useState(false);
  
  const deleteData  = async (id:Number) => {
    try {
     const response =  await axios.delete(`http://localhost:3002/api/admin/deleteClient/${id}`); 
     console.log(id)
  
       if(response.status === 200){
        setrefrech(!refrech);
       }
      console.log('load data')
    } catch (error) {
      console.error(error);
    }
  }
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3002/api/admin/AllClients'); 
         console.log(response.data)
       
       
         const convertedRows = response.data.map((ele: any) => ({
            id: ele.id,
            firstName: ele.firstName,
            lastName: ele.lastName,
            email: ele.email,
            
          }));
          console.log("converted", convertedRows);
          setclientRows(convertedRows);
      
       
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [refrech])
 
  
  
  
   
  return (
    <div className={styles.back}>
    <div className= {styles.tableheader} >List of Clients</div>
    <div className={styles.tablecontainer }>
      <DataGrid
        rows={rows}
        columns={columnsClient}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        
      />
    </div>
  </div>
    

    
  )
}

export default ManageClient