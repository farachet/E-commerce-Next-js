"use client"
import { SelectChangeEvent } from "@mui/material";
import React, { useState , useEffect , useContext } from 'react';
import "./addProduct.css"
import { Box, Input, Button, TextField } from "@mui/material";
import axios  from 'axios';
import { FormControl, InputLabel,Select,MenuItem} from '@mui/material'
import { ecommerceContext } from "@/app/Context/ecommerce";

interface Product {
  id: number;
  productname: string;
  price: number;
  reference: string;
  image: string;
  status: string;
  categoryId : number
}

const AddProducts: React.FC = () => {
  const {user,handleAddProduct}=useContext(ecommerceContext)
  const [productname, setProductname] = useState("")
  const [data , setData] = useState<Product[]>([])
  const [price, setPrice] = useState("");
  const [reference, setReference] = useState("")
  const [imageUrl, setImageUrl] = useState<string>("")
  const [file, setFile] = useState<File | null>(null)
  const [allCat,setAllCat]=useState<category[]>([])
  const [selectedCategory,setCategory]=useState<number|null>(null)
  const handleCategoryChange = (event: SelectChangeEvent<unknown>):void => {

    setCategory(event.target.value as number)
  };

  useEffect(() => {
    // fetch()
    getCategories()
  },  [])

 


  const getCategories=()=>{
    axios.get(`http://localhost:3001/api/admin/allcategories`)
    .then(res=>setAllCat(res.data))
    .catch(err=>console.log(err))
  }

console.log("5 taw",allCat)
  const AddProduct = () => {
    axios.post("http://localhost:3001/api/product/AddProduct", {
      productname: productname,
      price: price,
      reference: reference,
      image: imageUrl,
      status: "active",
      approved: 0,
      sellerId: user.id,
      categoryId:selectedCategory
    })
      .then((res: any) => {
        handleAddProduct()
      //  fetch()
      })
      .catch(err => {
        console.log(err);
      });
  }
 

  const uploadImage = async () => {
    if (!file) {
      console.log("select a file");
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ecommerce");

    try {
      const response = await axios.post("https://api.cloudinary.com/v1_1/dchp2ukgs/upload", formData);
      const imageUrl = response.data.secure_url;
      setImageUrl(imageUrl);
    } catch (error) {
      console.log(error);
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selected = event.target.files?.[0];
    if (selected) {
      setFile(selected);
    }
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
    
          <Box sx={{ display: "flex", flexDirection: "column" }}>
          <FormControl 
            className='select-form'
            fullWidth 
            variant="standard"
            
            sx={{
                borderBottom:"0.5px solid rgba(255, 255, 255, 0.5)",
                boxSizing:"border-box",
                marginTop:"20px"
              
                
            }}>
                      <InputLabel
                        id="demo-simple-select-label"
                        sx={{ color: '#FFF !important',
                        padding:"0px 59px",fontWeight:"bold",fontSize:"20px" }}
                      >
                        Categories
                      </InputLabel>
            <Select
              onChange={handleCategoryChange}
              value={selectedCategory}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              sx={{
                color: 'white',boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 }
  
              }}
            >
    
                {allCat.map(cat=>(
                  <MenuItem value={cat.id}>{cat.categoryname}</MenuItem>
                ))}
           </Select>
    </FormControl>
            <TextField
              value={productname}
              onChange={(event) => setProductname(event.target.value)}
              label={'Type product name'}
              id="margin-none"
              style={{ marginTop: 80 }}
            />

            <TextField
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              sx={{ color: "white" }}
              label={'Type product price'}
              id="margin-dense"
              margin="dense"
            />

            <TextField
              value={reference}
              onChange={(event) => setReference(event.target.value)}
              label={'Type product reference'}
              id="margin-none"
            />

            <input

              type="file"
              onChange={handleFileChange}
              style={{
                right:"20px",
                bottom:"27%",
                padding:"10px",
                borderRadius:"15px",

                 }}
            />
            <Button
              onClick={() => { uploadImage() }}
              variant="contained"
              style={{
              width : 50 , 
              height : 30 ,
              right:"20px",
              bottom:"27%",
              backgroundColor:"#6C5DD3",
              color:"white",
              padding:"10px",
              borderRadius:"15px",
               marginTop: '8px'  ,
               marginLeft : 20
            }}
            >
              Upload
            </Button>

            

            <Button
              onClick={() => { 
                AddProduct()
              }}
              variant="contained"
              style={{  right:"20px",
              bottom:"27%",
              backgroundColor:"#6C5DD3",
              color:"white",
              padding:"10px",
              borderRadius:"15px"}}
            >
              Add
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default AddProducts;
