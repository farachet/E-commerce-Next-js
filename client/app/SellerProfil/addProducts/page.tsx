import React, { useState , useEffect } from 'react';
import "./addProduct.css"
import { Box, Input, Button, TextField } from "@mui/material";
import axios  from 'axios';
import { FormControl, InputLabel,Select,MenuItem} from '@mui/material'

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

  const [productname, setProductname] = useState("")
  const [data , setData] = useState<Product[]>([])
  const [price, setPrice] = useState("");
  const [reference, setReference] = useState("")
  const [imageUrl, setImageUrl] = useState<string>("")
  const [status, setStatus] = useState("")
  const [approved, setApproved] = useState(0)
  const [sellerId, setSellerId] = useState(1)
  const [file, setFile] = useState<File | null>(null)
  const [categoryId , setCategoryId] = useState<number>(0)



 

const fetch = () => {
    axios
    .get(`http://localhost:3001/api/product/getAll/1`)
      .then((res : any) => {
        console.log(res.data)
        setData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    fetch()
  },  [])

  const AddProduct = () => {
    axios.post("http://localhost:3001/api/product/AddProduct", {
      productname: productname,
      price: price,
      reference: reference,
      image: imageUrl,
      status: status,
      approved: approved,
      sellerId: sellerId
    })
      .then((res: any) => {
        console.log(res.data);
       fetch()
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

            <TextField
              value={status}
              onChange={(event) => setStatus(event.target.value)}
              label={'Type product status'}
              id="margin-dense"
              margin="dense"
            />

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
