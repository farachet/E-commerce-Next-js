"use client"
import React , {useState}from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import { IconButton } from "@mui/material";
import { NotificationsActive, Chat } from "@mui/icons-material";
import '../Components/navbar/style.css'






function Navbar() {


  const [input , setInput] = useState<string>("")

  






  



  return (
        <AppBar position="static" className="header" sx={{  display: "flex" , justifycontent : 'space-between' }}>
        <Toolbar sx={
            {
            display:"flex",
            justifyContent:"space-between"
            }
        } >
        <Box style={{ display: "inline-block" }}>
    <Typography className="logo" style={{ display: "inline-block" }}>
        Logo
    </Typography>

    <Box className="search-container" style={{ display: "inline-block" }}>
        <SearchIcon className="search-icon" />
        <input 

        

        className="search-items"
        type="text"
        placeholder="Search Items, Fashion, Collection, and Users"
        />
    </Box>




    <Typography className="Home" style={{ display: "inline-block" }}>
        Home
    </Typography>


    
    <Typography className="Home" style={{ display: "inline-block" }}>
        All Products

    </Typography>
    <Typography className="explore" style={{ display: "inline-block" }}>
        Explore
    
    </Typography>
    
    <Typography
        className="personal-collection"
        style={{ display: "inline-block" }}
    >
        Personal Collection
    </Typography>

    
    <Typography
        className="personal-collection"
        style={{ display: "inline-block" }}
    >
        About Us
    </Typography>


    <Typography variant="body1" className="more" style={{ display: "inline-block" }}>
        More
    </Typography>
    </Box>


            <Box>
            <IconButton style={{ color: "white" , display: "inline-block"}}>
                <NotificationsActive className="icondel" />
            </IconButton>

            <IconButton style={{ color: "white" , display: "inline-block"}}>
                <Chat className="iconMes" />
            </IconButton>

                <Avatar className="Avatar" src=""
                sx={{display: "inline-block"}}/>
        
            
                <Avatar className="Avatar" src="g"
                sx={{display: "inline-block"}}/>

            </Box>
                
        </Toolbar>
        </AppBar>
  );
}

export default Navbar;
