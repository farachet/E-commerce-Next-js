"use client";
import React, { useContext, useEffect, useState } from "react";
import ClientHeader from "../../Components/ClientHeader/ClientHeader";
import ClientBody from "../../Components/ClientBody/ClientBody";
import axios from "axios";
import { Container } from "@mui/material";
import { ecommerceContext } from "../Context/ecommerce";
const Client = () => {
  const {user}=useContext(ecommerceContext)
  const [posts, setPost] = useState<Posts[]>([]);
  const [refresh, setRefresh] = useState<boolean>(false);
  
  const handleRefresh = (): void => {
    setRefresh(!refresh);
  };
  useEffect(() => {
    axios
      .get<Posts[]>(`http://localhost:3001/api/posts/allUserPosts/${user.id}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.error(err));

  }, [refresh]);
  const addPost = (post: Posts): void => {
    axios
      .post(`http://localhost:3001/api/posts/createPost/${user.id}`, post)
      .then((res) => {
        handleRefresh();
      })
      .catch((err) => console.log(err));
  };
  const deletePost = (postId: number): void => {
    axios
      .delete(`http://localhost:3001/api/posts/deletePost/${postId}`)
      .then((res) => setRefresh(!refresh))
      .catch((err) => console.error(err));
  };
  return (
    <Container
      sx={{
        backgroundColor:
          " linear-gradient(113.49deg, #984D38 -30.3%, #181E41 58.12%)",
        marginBottom: 100,
      }}
    >
      <ClientHeader user={user} handleRefresh={handleRefresh} />
      <ClientBody
        user={user}
        addPost={addPost}
        deletePost={deletePost}
        posts={posts}
        handleRefresh={handleRefresh}
      />
    </Container>
  );
};

export default Client;
