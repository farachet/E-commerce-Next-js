"use client"
import React , {useState , useEffect, useCallback, useContext} from 'react'
import { Container,Box, Typography } from '@mui/material'
import style from "./page.module.css";
import Profil from './profil/page';
import Products from './products/page';
import AddProducts from "./addProducts/page"
import Edit from "./EditProduct/page"
import axios  from 'axios';
import { ecommerceContext } from '../Context/ecommerce';
const profilSeller  : React.FC = () => {
  const {user,refreshProducts,handleAddProduct}=useContext(ecommerceContext)
  const [products, setProducts] = useState([]);
  const [Editt , setEditt] = useState<number>(0)
  const [openEdit, setOpenEdit] = React.useState(false);


console.log('bdina',user);

useEffect(()=>{
  axios
        .get(`http://localhost:3001/api/product/getAll/${user.id}`)
          .then((res) => {
            console.log("useE",res.data)
            setProducts(res.data)
          })
          .catch((err) => {
            console.log(err)
          })
},[user,refreshProducts])
console.log(products)



const HandleEdit = (n : number) => {
  setOpenEdit(true)
   setEditt(n)

}

  const UpdateProduct = (id : number , productname  : string, price : number  , reference  : string , status : string) => {
    axios.put(`http://localhost:3001/api/product/edit/${id}` , {
  
    productname: productname,
    price: price,
    reference: reference,
 
    status: status,

    })
    .then((res) => {
      handleAddProduct()
     
    })
    .catch((err) => {
console.log(err)
    })

   }
  
  return (
    <Box style={{ background: 'linear-gradient(123deg, #984D38 0%, #181E41 63%)' }}>
    <Profil />
    <Box style={{ display: "flex", marginTop: 50 }}>
      <AddProducts />
   
      {openEdit && <Edit setOpenEdit={setOpenEdit} UpdateProduct={UpdateProduct} Editt={Editt} />}
    
      <Products products={products} setOpenEdit={setOpenEdit} HandleEdit={HandleEdit} />
    </Box>
  </Box>


  )
}

export default profilSeller