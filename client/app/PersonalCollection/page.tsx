'use client'
import React, { useEffect, useState } from 'react'
import { Box } from "@mui/material";
// import ClientPosts from '../Client/body/ClientImages/ClientPosts.jsx'
import { Typography } from '@mui/material'
import axios from 'axios'


const PersonalCollection: React.FC = () => {

const [posts,setPosts]=useState([])

    console.log(posts)
    useEffect(()=>{
        
        axios.get(`http://localhost:3001/api/posts/getAllPosts`)
        .then(res=>setPosts(res.data))
        .catch(err=>console.error(err))
    },[])
    const style={width:"1200px",height:"581px",margin:"50px auto",borderRadius:"10px"}
    
  return (
    <Box>
        <Typography variant='h1' 
        sx={{
          color: "white",
          textAlign: "center",
          margin: "121px 1px",
          fontweight: "bold",
        }}>Personal Collection </Typography>
      {/* <ClientPosts style={style} posts={posts} /> */}
    </Box>
  )
}

export default PersonalCollection