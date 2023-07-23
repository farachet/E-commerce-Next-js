import React from "react";
import "../Navbar/Navbar.css";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import { IconButton } from "@mui/material";
import { NotificationsActive, Chat } from "@mui/icons-material";
import { FormControl } from "@mui/material";

function Navbar() {
  return (
    <div>
<AppBar position="static" className="header" style={{ display: "flex", justifyContent: 'spaceBetween' }}>
      <Toolbar >
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
  <Typography
    className="personal-collection"
    style={{ display: "inline-block" }}
  >
    Personal Collection
  </Typography>

  <Typography variant="body1" className="drops" style={{ display: "inline-block" }}>
    Drops
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
        </Box>

        <Box>
          <Avatar className="Avatar" src="https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg" sx={{display: "inline-block"}}/>
        </Box>
      </Toolbar>
    </AppBar>
    </div>
  );
}

export default Navbar;
