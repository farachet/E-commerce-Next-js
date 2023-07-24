"use client";
import React, { createContext, useState,useEffect } from "react";
import axios from "axios"
type ecommerceProps={
  user:User,
  handleRefreshContext:()=>void,
  handleLogoutUser:()=>void
}
export const ecommerceContext = createContext<ecommerceProps>({
  user:{},
  handleRefreshContext:()=> {},
  handleLogoutUser:()=>{},

});
const EcommerceContextProvider = (props:any) => {
    const [user,setCurrentUser]=useState({})
    const [refresh,setRefresh]=useState<boolean>(false)
    const [products,setProducts]=useState<Product[]>([])
    useEffect(()=>{
        const token=localStorage.getItem("token")
        axios.post(`http://localhost:3001/api/user`,{"token":token})
        .then(res=>{
          console.log("hommme",res.data)
          if(res.data.user){
           console.log(res.data.user)
           setCurrentUser(res.data.user)
          
          }
         })
        
        .catch(err=>console.log("errrr",err))
      },[refresh])
      
    const fetch = () => {
      console.log("user from fetech",user.id)
        axios
        .get(`http://localhost:3001/api/product/getAll/${user.id}`)
          .then((res) => {
            console.log("fetched ",res.data)
            console.log(res.data)
            setProducts(res.data)
          })
          .catch((err) => {
            console.log(err)
          })
      }

      const handleRefreshContext=()=>{
        setRefresh(!refresh)
      }
      const handleLogoutUser=()=>{
        setCurrentUser({})
      }
    const contextValue={
      user,
      handleRefreshContext,
      handleLogoutUser,
      fetch,
      products
    
    }
    return (
        <ecommerceContext.Provider value={contextValue}>
          {props.children}
        </ecommerceContext.Provider >
      );



}
export default EcommerceContextProvider