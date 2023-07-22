"use client"
import React, { useState, useContext } from "react";
import "./style.css";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import { IconButton } from "@mui/material";
import { NotificationsActive, Chat } from "@mui/icons-material";

import Link from "next/link";
import { ecommerceContext } from "@/app/Context/ecommerce";

function Navbar() {
  const { user } = useContext(ecommerceContext);

  const [input, setInput] = useState("");

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

          <Link href="/Home">
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

        <Box>
          <IconButton style={{ color: "white", display: "inline-block" }}>
            <NotificationsActive className="icondel" />
          </IconButton>

          <IconButton style={{ color: "white", display: "inline-block" }}>
            <Chat className="iconMes" />
          </IconButton>
          {user.role === "seller" ? (
            <Link href="/seller">
              <Avatar
                className="Avatar"
                src={user.image}
                sx={{ display: "inline-block" }}
              />
            </Link>
          ) : (
            ""
          )}
          {user.role === "client" ? (
            <Link href="/Client">
              <Avatar
                className="Avatar"
                src={user.image}
                sx={{ display: "inline-block" }}
              />
            </Link>
          ) : (
            ""
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
