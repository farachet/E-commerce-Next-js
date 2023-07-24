'use client'


import { useContext, useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material';
import axios from "axios"
import Card from '../../Components/card/Card'
import Filter from "../../Components/Filter"
import ShopCart from '../../Components/ShopCart';
import { ecommerceContext } from '../Context/ecommerce';
export default function Home() {
  const {user}=useContext(ecommerceContext)
  const [refresh, setRefresh] = useState<boolean>(false);
  const [products,setProducts]=useState<Products[]>([])
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [cartItems,setCartItems]=useState<Products[]>([])
  const [totalCost,setTotalCost]=useState<number>(0)
  const [allCat,setAllCat]=useState<category[]>([])

  const openCart = ():void => { 
    setIsOpen(true);
  };

  const closeCart = ():void => {
    setIsOpen(false);
  };
useEffect(() => {
  getCategories()
    axios.get<Products[]>(`http://localhost:3001/api/product/getAllProducts`)
    .then(res=>{
      const filteredProducts=res.data.filter(item=>item.status==="active"&&item.approved)
      setProducts(filteredProducts)
      
      
    })
    .catch(err=>console.error("err"))
    axios.get<Products[]>(`http://localhost:3001/api/cards/getAll/${user.id}`)
    .then((res)=>{
       
        setCartItems(res.data)
        const totalCost = res.data.reduce((acc, product) => acc + product.price, 0);
        setTotalCost(totalCost)

    })
    .catch((err)=>{
        console.log(err)
    })
  }, [refresh]);
  const getCategories=()=>{
    axios.get(`http://localhost:3001/api/admin/allcategories`)
    .then(res=>setAllCat(res.data))
    .catch(err=>console.log(err))
  }
  const addToCart=(productId:number):void=> {
    axios.post(`http://localhost:3001/api/cards/add/${user.id}`,{productId})
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
      if(query===0){
        const allCategories=res.data.filter(ele=>ele.status==="active")
        setProducts(allCategories)
      }else{
        const updatedProducts=res.data.filter(ele=>ele.categoryId===query&&ele.status==="active")
        console.log("filltred", updatedProducts) 
        setProducts(updatedProducts) 
      }
     

    })
    .catch((err)=>{
        console.log(err)
    })
  
  }
  const addToCollection=(data:any)=>{
    console.log("hey",data)
    axios.post(`http://localhost:3001/api/posts/createPost/${user.id}`,data)
    .then((res)=>{
      console.log("sent" )
    })
    .catch(err=>console.log(err))
  }
  const handleCheckout=()=>{
    axios.put(`http://localhost:3001/api/product/updateStatus/${user.id}`)
    .then(res=>{
      setRefresh(!refresh)
      axios.delete(`http://localhost:3001/api/cards/deleteAll/${user.id}`)
    .then(()=>{
      setRefresh(!refresh)
    })
    .catch((err)=>console.error(err))

    })
    .catch(err=>console.error(err))
  }
  return (
    <Box className='allProducts-container' style={{
                  margin:"200px 40px ",
                  display:"flex",
                  width:"100%",
                
                  gap:"3%"
            
                }}>
                   
                  <ShopCart handleCheckout={handleCheckout}  totalCost={totalCost} cartItems={cartItems} openCart={openCart} closeCart={closeCart} isOpen={isOpen} handleDeleteFromCart={handleDeleteFromCart} />
                  <Box sx={{
                    width:"20%",
                    backgroundColor:"rgba(255, 255, 255, 0.1)",
                    height:"1400px",
                    padding:"10px",
                    
            
                  }}>
                    <Filter  allCat={allCat} handleFilterCategory={handleFilterCategory} handleFilterPrice={handleFilterPrice}/>
                   
            
            
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
                       
            
                          </Box>
            
                        <Box  sx={{
                          display:"flex",
                          gap:"30px",
                          width:"100%",
                          
                          flexWrap:"wrap",
                        }}>
                            
                            {products &&products.length!==0?
                              products.map(item=><Card   addToCollection={addToCollection} addToCart={addToCart} key={item.id} item={item}/>):""
                            }
                          
                        </Box>
                  </Box>
                </Box>
  )

}

