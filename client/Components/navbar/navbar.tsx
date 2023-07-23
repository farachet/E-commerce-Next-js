"use client"
import React, { useState, useContext } from "react";
import "./style.css";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import { IconButton } from "@mui/material";
import { NotificationsActive, Chat } from "@mui/icons-material";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import Link from "next/link";
import { ecommerceContext } from "@/app/Context/ecommerce";
import { useRouter} from 'next/navigation'

function Navbar() {
  const { user,handleRefreshContext,handleLogoutUser} = useContext(ecommerceContext);
  const router = useRouter()
  const [input, setInput] = useState("");
  const handleLogout=()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("role")
    handleRefreshContext()
    handleLogoutUser()
    router.push("/")

  }

  return (
    <AppBar
      position="static"
      className="header"
      style={{ display: "flex", justifyContent:"space-between" }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box style={{ display: "inline-block" }}>
          <Typography className="logo" style={{ display: "inline-block" }}>
            Logo
          </Typography>

          <Box className="search-container" style={{ display: "inline-block" }}>
            <SearchIcon className="search-icon" />
            <input
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
              className="search-items"
              type="text"
              placeholder="Search Items, Fashion, Collection, and Users"
            />
          </Box>

          <Link href="/">
            <Typography className="Home" style={{ display: "inline-block" }}>
              Home
            </Typography>
          </Link>

          {user.role === "client" ? (
            <Link href="/allProducts">
              <Typography className="Home" style={{ display: "inline-block" }}>
              All Products
            </Typography>
                
            </Link>
          ) : (
            ""
          )}

          {user.role === "client" ? (
            <Link href="/PersonalCollection">
              <Typography
                className="personal-collection"
                style={{ display: "inline-block" }}
              >
                Personal Collection
              </Typography>
            </Link>
          ) : (
            ""
          )}
          <Link href="/aboutus">
            <Typography
              className="personal-collection"
              style={{ display: "inline-block" }}
            >
              About Us
            </Typography>
          </Link>

          <Typography
            variant="body1"
            className="more"
            style={{ display: "inline-block" }}
          >
            More
          </Typography>
        </Box>

        <Box sx={{
          display:"flex",
          alignItems:"center"
        }}>
          <IconButton style={{ color: "white", display: "inline-block" }}>
            <NotificationsActive className="icondel" />
          </IconButton>

          <IconButton style={{ color: "white", display: "inline-block" }}>
            <Chat className="iconMes" />
          </IconButton>
          {!user.firstName&&
          <Box >
            <Link href="/auth/login">
                <Button sx={{
                color:"white",
                fontWeight:"bold",
                fontSize:25
              }}>
                  Sign in
                </Button>
            </Link>
            <Link href="/auth/register">
            <Button sx={{
            color:"white",
            fontWeight:"bold",
            fontSize:25
          }}>
              Sign Up
            </Button></Link>
           
            
            </Box>}
          {user.role === "seller" ? (
           <Box sx={{
            display:"flex",
            alignItems:"center"
          }}>
          <Link href="/SellerProfil">
            <Avatar
              className="Avatar"
              src={user.image}
              sx={{ display: "inline-block" }}
            />
          </Link>
          <LogoutOutlinedIcon onClick={handleLogout} sx={{
            marginLeft:"30px",
            fontSize:"40px",
            fontWeight:"bold"
          }}/>
          </Box>
        ) : (
          ""
        )}
          {user.role === "client" ? (
            <Box sx={{
              display:"flex",
              alignItems:"center"
            }}>
            <Link href="/Client">
              <Avatar
                className="Avatar"
                src={user.image}
                sx={{ display: "inline-block" }}
              />
            </Link>
            <LogoutOutlinedIcon onClick={handleLogout} sx={{
              marginLeft:"30px",
              fontSize:"40px",
              fontWeight:"bold"
            }}/>
            </Box>
          ) : (
            ""
          )}
        </Box>
        
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

