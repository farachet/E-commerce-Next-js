"use client";
import React, { createContext, useState } from "react";
type ecommerceProps={
  user:User,
  handleUser:(user:User)=>void
}
export const ecommerceContext = createContext<ecommerceProps>({
  user:{},
  handleUser:()=>{}
});
const EcommerceContextProvider = (props:any) => {
    const [user,setCurrentUser]=useState({})

    const handleUser=(user:User)=>{
        setCurrentUser(user)
    }

    const contextValue={
      user,
      handleUser
      
    
    }
    return (
        <ecommerceContext.Provider value={contextValue}>
          {props.children}
        </ecommerceContext.Provider >
      );



}
export default EcommerceContextProvider