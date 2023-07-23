import React, { useEffect, useState } from 'react';
import { Avatar, Box, Drawer, IconButton, List, ListItem, Button, Typography } from '@mui/material';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

type Props={
  openCart:()=>void,
  isOpen:boolean,
  closeCart:()=>void,
  totalCost:number,
  cartItems:Products[],
  handleDeleteFromCart:(productId:number)=>void
  handleCheckout:()=>void
}
const ShopCart:React.FC<Props> = ({openCart,isOpen,closeCart,totalCost,cartItems,handleDeleteFromCart,handleCheckout}) => {
  if(!cartItems){
    return null
  }
  return (
    <>
  <ShoppingCartRoundedIcon onClick={openCart} sx={{
      
    position: "absolute",
    right: "21%",
    top: "11px",
    color: "white",
    fontSize:"49px",
    cursor: "pointer"
  }}/>
  <Drawer anchor="right" open={isOpen} onClose={closeCart}
          sx={{
            "& .MuiPaper-root.MuiDrawer-paper.MuiDrawer-paperAnchorRight": {
              width: "23%",
              marginTop: "1%",
              padding: "2%",
              borderRadius: "5px"
            }
          }}
  >
    <div>
      <IconButton onClick={closeCart}>
       
      </IconButton>
    </div>
    <div>
      <Typography variant="h6">Cart</Typography>
    </div>
    <div>
      <List>
        {cartItems.map((item) => {
          return (
            <ListItem key={item.id}>
              <Box sx={{
                backgroundColor: "#f4eded",
                width: "130%",
                height: "120px",
                padding: "10px"
              }}>
                <Box sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "10px",
                  width: "100%",
                  justifyContent: "space-between"
                }}>
                  <Avatar
                    src={item.image}
                    sx={{
                      width: "50%",
                      height: "110px",
                      borderRadius: "0px",
                      marginTop: "10px"
                    }}
                  />
                  <Box sx={{
                    display: "flex",
                    flexDirection: "column"
                  }}>
                    <Typography variant='subtitle2' sx={{
                      fontSize: "20px",
                      fontWeight: "bold"
                    }}>{item.productname}</Typography>
                    <Typography variant='subtitle2'
                                sx={{
                                  color: "gray"
                                }}
                    >{item.reference}</Typography>
                  </Box>
                  <Typography variant='subtitle2' sx={{
                    fontSize: "20px",
                    fontWeight: "bold"
                  }}>${item.price}</Typography>
                  <IconButton
                    onClick={() => {handleDeleteFromCart(item.id)}} // Replace 'handleDelete' with your actual delete function
                    sx={{
                      color: 'red',
                      fontSize:"30px"
                    }}
                  >
                   <DeleteOutlineIcon/>
                  </IconButton>
                </Box>
              </Box>
            </ListItem>
          );
        })}
      </List>
    </div>
   {totalCost>0?<> <div>
      <Typography variant="subtitle1" align="right" fontWeight="bold" fontSize={20}>
        Total {totalCost}
      </Typography>
    </div>
    <Button
    onClick={handleCheckout}
    className='checkout-btn'
        sx={{
          color:"white",
          fontWeight:"bold",
          backgroundColor:"green",
          '&:hover': {
            backgroundColor: 'green', 
          },


        }}
    >Checkout</Button></>:<Typography variant="subtitle1" sx={{color:"gray"}}>Empty Cart</Typography>}
  </Drawer>
</>

  );
};

export default ShopCart;