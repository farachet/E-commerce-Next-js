"use client"
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import "../Category/admin.css"
import ResponsiveDrawer from "../page";


interface Category {
  Collection: { name: string; image: string };
  id: number;
  categoryname: string;
  image: string;
  Stock: number;
}

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "Collection",
    headerName: "Collection",
    width: 150,
    renderCell: (params: GridRenderCellParams) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={params.value.image}
          alt="Collection"
          style={{ width: 30, height: 30, marginRight: 10 }}
        />
        {params.value.name}
      </div>
    ),
  },
  {
    field: "Stock",
    headerName: "Stock",
    type: "number",
    width: 150,
    editable: true,
  },
];

const Admin: React.FC = () => {
  const [rows, setRows] = useState<Category[]>([]);
  const [newCategory, setNewCategory] = useState<string>("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [stock, setStock] = useState<number>(0);
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");

  const uploadImage = async () => {
    if (!file) return;

    const form = new FormData();
    form.append("file", file);
    form.append("upload_preset", "commerce");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dnzfcueon/upload",
        form
      );
      const imageUrl = response.data.secure_url;
      setImageUrl(imageUrl);
    } catch (error) {
      console.error("Failed to upload image:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (imageUrl) {
      const updatedRows = rows.map((row) => ({
        ...row,
        Collection: { ...row.Collection, image: imageUrl },
      }));
      setRows(updatedRows);
    }
  }, [imageUrl, rows]);

  // Fetch Categories
  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/api/admin/allcategories"
      );
      const categoriesData: Category[] = response.data; 
console.log(response.data);

      setCategories(categoriesData);

      const newRows:any = categoriesData.map((category: Category) => ({
        id: category.id,
        Collection: { name: category.categoryname, image: category.image },
        Stock: category.Stock
      }));
      setRows(newRows);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  };

  // Add Categories
  const addCategory = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/admin/addcategory",
        {
          categoryname: newCategory,
          image: imageUrl,
        }
      );
      const newCategoryData: Category = response.data; 
      console.log('aaaass',response.data);
      
      const newData: Category = {
        id: newCategoryData.id,
        Collection: {
          name: newCategoryData.categoryname,
          image: imageUrl,
        },
        Stock: stock,
        categoryname: "",
        image: ""
      };
      setRows((prevRows) => [...prevRows, newData]);
      setNewCategory("");
    } catch (error) {
      console.error("Failed to add category:", error);
    }
  };

  // Delete categories
  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3001/api/admin/delete/${id}`);
      const updatedRows = rows.filter((row) => row.id !== id);
      setRows(updatedRows);
    } catch (error) {
      console.error("Failed to delete category:", error);
    }
  };

  return (
    <div className="body">
<ResponsiveDrawer Collection={{
        name: "",
        image: ""
      }} id={0} categoryname={""} image={""} Stock={0}/>
<div style={{color:"white",fontSize:20,fontWeight:'bold',marginLeft:850}}> List Categories</div>
      <Box sx={{ height: 400, width: "50%", marginTop: 5, marginLeft: 60 ,backgroundColor:'grey'}}>
  
        <DataGrid
          className="custom-datagrid"
          rows={rows}
          columns={[
            ...columns,
            {
              field: "delete",
              headerName: "Delete",
              width: 100,
              renderCell: (params: { row: { id: number; }; }) => (
                <Button
                  variant="outlined"
                  color="secondary"
                  size="small"
                  onClick={() => handleDelete(params.row.id)}
                >
                  Delete
                </Button>
              ),
            },
          ]}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        />
        
      </Box>

      <footer>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <h2>Add New Category</h2>
              <TextField
                id="standard-basic"
                label="Standard"
                variant="standard"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                InputProps={{
                  style: {
                    color: 'white',
                  },
                }}
              />
              <div>
<input
  type="file"
  onChange={(e) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  }}
/>

                <br />
                <Button
                  variant="outlined"
                  onClick={() => {
                    uploadImage();
                    addCategory();
                  }}
                >
                  Add
                </Button>
              </div>
            </div>
          </Box>
        </Box>
       
      </footer>
    </div>
  );
}
export default Admin