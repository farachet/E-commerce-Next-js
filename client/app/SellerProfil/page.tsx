"use client"
import React , {useState} from 'react'
import { Container,Box, Typography } from '@mui/material'
import style from "./page.module.css";
import Profil from './profil/page';
import Products from './products/page';
import AddProducts from "./addProducts/page"
import Edit from "./EditProduct/page"
import axios  from 'axios';

const profilSeller  : React.FC = () => {
 
  const [show, setShow] = useState<string>("AddProducts");
  const [Editt , setEditt] = useState<number>(0)

console.log(show);
console.log(Editt);

const HandleEdit = (n : number) => {
   setEditt(n)
}

  const UpdateProduct = (id : number , productname  : string, price : number  , reference  : string , image : string , status : string) => {
    console.log("am here")
    axios.put(`http://localhost:3001/api/product/edit/${id}` , {
  
    productname: productname,
    price: price,
    reference: reference,
    image: image,
    status: status,

    })
    .then((res) => {
     console.log(res.data)
    })
    .catch((err) => {
console.log(err)
    })

   }
  
  return (
<Box style={{ background: 'linear-gradient(123deg, #984D38 0%, #181E41 63%)' }}>
  <Profil />
  <Box style={{ display: "flex" , marginTop: 50 }}>
    <AddProducts />
    <Box style={{ display: show && "none", marginLeft: 20 }}>
      <Edit setShow={setShow} UpdateProduct={UpdateProduct} Editt={Editt}/>
    </Box>
    <Products setShow={setShow}  HandleEdit={HandleEdit} />
  </Box>
</Box>


  )
}

export default profilSeller