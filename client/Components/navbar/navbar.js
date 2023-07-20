import React , {useState,useContext}from "react";
import "./style.css";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import { IconButton } from "@mui/material";
import { NotificationsActive, Chat } from "@mui/icons-material";
import { FormControl } from "@mui/material";

import {Link} from "react-router-dom"
import {ecommerceContext} from '../../ecommerceContext/e-commerceContext'


function Navbar() {
  const {currentUser,search}=useContext(ecommerceContext)

  const [input , setInput] = useState("")

  






  



  return (
    <AppBar position="static" className="header" style={{  display: "flex" , justifycontent : 'spaceBetween' }}>
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
    value={input}
    onChange={(e) => {
      setInput(e.target.value)
      search(e.target.value)
      
      }}
    

      className="search-items"
      type="text"
      placeholder="Search Items, Fashion, Collection, and Users"
    />
  </Box>



 <Link to="home">
 <Typography className="Home" style={{ display: "inline-block" }}>
    Home
  </Typography>
 </Link>

 {currentUser.role==="client"? <Link to='/allProduct'>
 <Typography className="Home" style={{ display: "inline-block" }}>
    All Products

  </Typography></Link> :""}
  <Typography className="explore" style={{ display: "inline-block" }}>
    Explore
    <FormControl>
      {/* <Select  className='down' style={{color : "white"}}  >
        <MenuItem value="option1">Option 1</MenuItem>
        <MenuItem value="option2">Option 2</MenuItem>
        <MenuItem value="option3">Option 3</MenuItem>
      </Select>  */}
    </FormControl>
  </Typography>
 {currentUser.role==="client"?<Link to="/PersonalCollection">
 <Typography
    className="personal-collection"
    style={{ display: "inline-block" }}
  >
    Personal Collection
  </Typography>
 </Link> :""}
 <Link to="/aboutus">
 <Typography
    className="personal-collection"
    style={{ display: "inline-block" }}
  >
    About Us
  </Typography>
 </Link> 

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
{currentUser.role==="seller"  ? <Link to="/seller">
              <Avatar className="Avatar" src={currentUser.image}
              sx={{display: "inline-block"}}/>
          </Link>
          :""
          }
          {currentUser.role==="client"?<Link to="/profile">
              <Avatar className="Avatar" src={currentUser.image}
              sx={{display: "inline-block"}}/>
          </Link>:""}
        </Box>
              
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
