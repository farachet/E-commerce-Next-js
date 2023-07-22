"use client"
import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import axios from 'axios';
import { Button } from '@mui/material';
import styles from '../Requests/style.module.css';
import ResponsiveDrawer from '../page';

interface ClientData {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

const ManageClient: React.FC = () => {
  const columnsClient: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 150 },
    { field: 'lastName', headerName: 'Last name', width: 150 },
    {
      field: 'email',
      headerName: 'Email',
      width: 250,
    },
    {
      field: 'delete',
      headerName: 'Actions',
      width: 75,
      sortable: false,
      renderCell: (params: any) => (
        <Button onClick={() => deleteData(params.row.id)} variant="outlined" color="error">
          Delete
        </Button>
      ),
    },
  ];

  const [rows, setclientRows] = useState<ClientData[]>([]);
  const [refrech, setrefrech] = useState<boolean>(false);

  const deleteData = async (id: number) => {
    try {
      const response = await axios.delete(`http://localhost:3001/api/client/delete/${id}`);
      console.log(id);

      if (response.status === 200) {
        setrefrech(!refrech);
      }
      console.log('load data');
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/client/getClient');
        console.log(response.data);

        const convertedRows: ClientData[] = response.data.map((ele: any) => ({
          id: ele.id,
          firstName: ele.firstName,
          lastName: ele.lastName,
          email: ele.email,
        }));
        console.log('converted', convertedRows);
        setclientRows(convertedRows);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [refrech]);

  return (
    <div>
      <ResponsiveDrawer Collection={{
        name: '',
        image: ''
      }} id={0} categoryname={''} image={''} Stock={0}/>
    <div className={styles.back}>
      <div className={styles.tableheader}>List of Clients</div>
      <div className={styles.tablecontainer}>
        <DataGrid
          rows={rows}
          columns={columnsClient}
          pageSize={5}
          rowsPerPageOptions={[5, 10]}
          checkboxSelection={false}
          disableSelectionOnClick
        />
      </div>
    </div>
    </div>
  );
};

export default ManageClient;
