"use client";
import React, { useEffect, useState } from "react";
import ClientHeader from "../../Components/ClientHeader/ClientHeader";
import ClientBody from "../../Components/ClientBody/ClientBody";
import axios from "axios";
import { Container } from "@mui/material";

const Client = () => {
  const [posts, setPost] = useState<Posts[]>([]);
  const [refresh, setRefresh] = useState<boolean>(false);
  const [user, setUser] = useState<any>({});
  const handleRefresh = (): void => {
    setRefresh(!refresh);
  };
  useEffect(() => {
    axios
      .get<Posts[]>(`http://localhost:3001/api/posts/allUserPosts/${28}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.error(err));
    axios
      .get<User[]>(`http://localhost:3001/api/client/getClient/${28}`)
      .then((res) => {
        console.log("data", res.data);
        setUser(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, [refresh]);
  const addPost = (post: Posts): void => {
    axios
      .post(`http://localhost:3001/api/posts/createPost/${28}`, post)
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
