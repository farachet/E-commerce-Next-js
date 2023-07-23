"use client"
import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import axios from 'axios';
import { Button } from '@mui/material';
import styles from '../Requests/style.module.css';

import ResponsiveDrawer from '../page';


interface Seller {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

const ManageSellers: React.FC = () => {
  const columnsSeller: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'email', headerName: 'Email', width: 250 },
    {
      field: 'delete',
      headerName: 'Actions',
      width: 75,
      sortable: false,
      renderCell: (params: GridRenderCellParams) => (
        <Button onClick={() => deleteData(params.row.id)} variant="outlined" color="error">
          Delete
        </Button>
      ),
    },
  ];

  const deleteData = async (id: number) => {
    try {
      const response = await axios.delete(`http://localhost:3001/api/admin/deleteSeller/${id}`);
      console.log(id)

      if (response.status === 200) {
        setRefresh(!refresh);
      }
      console.log('load data')
    } catch (error) {
      console.error(error);
    }
  }

  const [sellerRows, setSellerRows] = useState<Seller[]>([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/admin/AllSellers');
        console.log(response.data);
        const convertedRows: Seller[] = response.data.map((ele: any) => ({
          id: ele.id,
          firstName: ele.firstName,
          lastName: ele.lastName,
          email: ele.email,
        }));
        console.log("converted", convertedRows);
        setSellerRows(convertedRows);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [refresh])

  return (
    <div>

      <ResponsiveDrawer Collection={{
        name: '',
        image: ''
      }} id={0} categoryname={''} image={''} Stock={0}/>

      <div className={styles.tableheader}>List of Sellers</div>
      <div className={styles.tablecontainer}>
        <DataGrid
          rows={sellerRows}
          columns={columnsSeller}
          pageSize={5}
          checkboxSelection
        />
      </div>
    </div>
  )
}

export default ManageSellers;
