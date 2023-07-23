import axios from 'axios'
import React, { useState } from 'react'
import "./AddPost.css"
import { Avatar } from '@mui/material'
import LoadingComponent from '../Loading/Loading'
type Props={
    user:User,
    addPost:(post:Posts)=>void,
    handleRefresh:()=>void,

}
const AddPost:React.FC<Props> = ({addPost,handleRefresh,user}) => {
    const [post,setPost]=useState<string>("")
    const  [imageUrl,setImageUrl]=useState<string>("")
    const[file,setFile]=useState("")
    const [isLoading,setIsLoading]=useState(false)
   
    const uploadImage=async()=>{
      const form=new FormData()
      form.append("file",file)
      form.append("upload_preset","travelMind")
      await axios.post("https://api.cloudinary.com/v1_1/do25iiz1j/upload",form)
      .then(res=>{
        setImageUrl(res.data.secure_url)
        setIsLoading(false)
      })
      .catch(err=>console.log(err))
    }
  return (
  
        <div className='post-input'>
                         <Avatar
                src={user.image}
                sx={{width:"43px",height:"43px"}}
                />
                <input className='about-trip'  placeholder=" write about your trip here ..." value={post} onChange={(e)=>setPost(e.target.value)} />
                <input className='image-input' type='file' onChange={(e:any)=>setFile(e.target.files[0])} />
            {isLoading?<LoadingComponent/>:                <button className='addPost' onClick={()=>{
                  uploadImage()
                  setIsLoading(true)
                }} >upload Image</button>}
            {imageUrl&&  <button className='addPost' onClick={()=>{
                    
                    addPost({content:post,image:imageUrl})
                    setPost("")
                    handleRefresh()
                    setImageUrl("")
                }}>Add Post</button>}
        </div>


  )
}

export default AddPost