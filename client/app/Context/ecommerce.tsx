"use client";
import React, { createContext, useState,useEffect } from "react";
import axios from "axios"
type ecommerceProps={
  user:User,
  handleRefreshContext:()=>void,
  handleLogoutUser:()=>void,
  handleAddProduct:()=>void,
}
export const ecommerceContext = createContext<ecommerceProps>({
  user:{},
  handleRefreshContext:()=> {},
  handleLogoutUser:()=>{},
  handleAddProduct:()=>{}
});
const EcommerceContextProvider = (props:any) => {
    const [user,setCurrentUser]=useState({})
    const [refresh,setRefresh]=useState<boolean>(false)
    const [refreshProducts,setRefreshProducts]=useState<boolean>(false)
    useEffect(()=>{
        const token=localStorage.getItem("token")
        axios.post(`http://localhost:3001/api/user`,{"token":token})
        .then(res=>{
         
          if(res.data.user){
           console.log(res.data.user)
           setCurrentUser(res.data.user)
          
          }
         })
        
        .catch(err=>console.log("errrr",err))
      },[refresh])

      const handleRefreshContext=()=>{
        setRefresh(!refresh)
      }
      const handleLogoutUser=()=>{
        setCurrentUser({})
      }
      const handleAddProduct=()=>{
        setRefreshProducts(!refreshProducts)
      }
    const contextValue={
      user,
      handleRefreshContext,
      handleLogoutUser,
      handleAddProduct,
      refreshProducts

    
    }
    return (
        <ecommerceContext.Provider value={contextValue}>
          {props.children}
        </ecommerceContext.Provider >
      );



}
export default EcommerceContextProvider