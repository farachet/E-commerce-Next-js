'use client'
import Image from 'next/image'

import { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material';
import axios from "axios"
import Card from '../../Components/card/Card'
import Filter from "../../Components/Filter"
import ShopCart from '../../Components/ShopCart';
export default function Home() {

  const [refresh, setRefresh] = useState<boolean>(false);
  const [products,setProducts]=useState<Products[]>([])
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [cartItems,setCartItems]=useState<Products[]>([])
  const [totalCost,setTotalCost]=useState<number>(0)
  

  const openCart = ():void => { 
    setIsOpen(true);
  };

  const closeCart = ():void => {
    setIsOpen(false);
  };
useEffect(() => {
    axios.get<Products[]>(`http://localhost:3001/api/product/getAllProducts`)
    .then(res=>{
      setProducts(res.data)
      
      
    })
    .catch(err=>console.error("err"))
    axios.get<Products[]>(`http://localhost:3001/api/cards/getAll/${21}`)
    .then((res)=>{
       
        setCartItems(res.data)
        const totalCost = res.data.reduce((acc, product) => acc + product.price, 0);
        setTotalCost(totalCost)

    })
    .catch((err)=>{
        console.log(err)
    })
  }, [refresh]);
  // if (!cartItems) {
  //   return null;
  // }
  const addToCart=(productId:number):void=> {
    axios.post(`http://localhost:3001/api/cards/add/${21}`,{productId})
    .then(res=>{
      setRefresh(!refresh)
      openCart()
      setTimeout(()=>{
        closeCart()
      },2000)
    })
    .catch(err=>console.error(err))
  }
  const handleDeleteFromCart=(productId:number):void=>{
    axios.delete(`http://localhost:3001/api/cards/delete/${productId}`)
    .then(()=>{
      setRefresh(!refresh)
    })
    .catch((err)=>console.error(err))
  }
  const handleFilterPrice=(price:number):void=>{
    console.log("from main ",price)
    axios.get<Products[]>(`http://localhost:3001/api/product/getAllProducts`)
    .then((res)=>{
      
      const updatedProducts=res.data.filter((ele)=>{
        console.log(ele,price,ele.price<=price&&ele.status==="active")
        return ele.price<=price&&ele.status==="active"
      })
      console.log("filltred",updatedProducts) 
      setProducts(updatedProducts) 
  
    })
    .catch((err)=>{
        console.log(err)
    })
  }
  const handleFilterCategory=(query:number)=>{
    axios.get<Products[]>(`http://localhost:3001/api/product/getAllProducts`)
    .then((res)=>{
      console.log("query",query)
      const updatedProducts=res.data.filter(ele=>ele.category.id===query)
      console.log("filltred") 
      setProducts(updatedProducts) 

    })
    .catch((err)=>{
        console.log(err)
    })
  
  }
  return (
    <Box className='allProducts-container' style={{
                  margin:"200px 40px ",
                  display:"flex",
                  width:"100%",
                
                  gap:"3%"
            
                }}>
                   {/* handleDeleteFromCart={handleDeleteFromCart} cartItems={cartItems} openCart={openCart} closeCart={closeCart} isOpen={isOpen} */}
                  <ShopCart  totalCost={totalCost} cartItems={cartItems} openCart={openCart} closeCart={closeCart} isOpen={isOpen} handleDeleteFromCart={handleDeleteFromCart} />
                  <Box sx={{
                    width:"20%",
                    backgroundColor:"rgba(255, 255, 255, 0.1)",
                    height:"1400px",
                    padding:"10px",
                    
            
                  }}>
                    <Filter handleFilterCategory={handleFilterCategory} handleFilterPrice={handleFilterPrice}/>
                    {/* <Filter handleFilterPrice={handleFilterPrice} handleFilterCategory={handleFilterCategory}/>    */}
            
            
                  </Box>
                  <Box sx={{
                    margin:"0px",
                    padding:"0px",
                    width:"69%",
                    display:"flex",
                    flexDirection:"column"
                    
            
            
                  }} >
            
                          <Box sx={{
                             
                              height:"10%",
                              display:"flex",
                              
                              justifyContent:"space-between"
            
                          }}>
                            <Typography 
                            variant='subtitle2'
                            sx={{
                              color:" rgba(255, 255, 255, 0.80);",
                              fontWeight:"bold",
                              fontSize:"20px",
                              marginTop:"25px"
                            }}
                            >
                              {products.length} items
                            </Typography>
                            {/* <CardsFilter/> */}
            
                          </Box>
            
                        <Box  sx={{
                          display:"flex",
                          gap:"30px",
                          width:"100%",
                          
                          flexWrap:"wrap",
                        }}>
                            
                            {products &&products.length!==0?
                              products.map(item=><Card  addToCart={addToCart} key={item.id} item={item}/>):""
                            }
                            {/* <Cart addToCart={addToCart} addToCollection={addToCollection} product={product} key={product.id}/> */}
                        </Box>
                  </Box>
                </Box>
  )

}

