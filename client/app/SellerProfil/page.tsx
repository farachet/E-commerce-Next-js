import React from 'react'
import { Container,Box, Typography } from '@mui/material'
import style from "./page.module.css";
import Profil from './profil/page';
import Products from './products/page'

type Props = {}

const profilSeller = () => {
  return (
   <Box  style={{  background: 'linear-gradient(123deg, #984D38 0%, #181E41 63%)' }} >
    <Profil />
    <Products/>
    
    </Box>
 

  )
}

export default profilSeller