import React from 'react'
import { Container,Box, Typography } from '@mui/material'
import style from "./page.module.css";
import Profil from './profil/page';
import Products from './products/page';
import AddProducts from "./addProducts/page"


const profilSeller  : React.FC = () => {
  return (
   <Box  style={{  background: 'linear-gradient(123deg, #984D38 0%, #181E41 63%)' }} >
    <Profil />
    <Box  style={{display : "flex" , marginTop : 50}} >
    <AddProducts />
    <Products/>
   
    </Box>
    </Box>
 

  )
}

export default profilSeller