import React from "react";
import { Container, Box } from "@mui/material";
import "./ClientBody.css";

import ClientImages from "../ClientImages/ClientImages";
import ClientPosts from "../ClientPosts/ClientPosts";
import AddPost from "../AddPost/AddPost";
type Props = {
  user: User;
  posts: Posts[];
  handleRefresh: () => void;
  deletePost: (postId: number) => void;
  addPost: (post: Posts) => void;
};
const ClientBody: React.FC<Props> = ({
  addPost,
  posts,
  handleRefresh,
  deletePost,
  user,
}) => {
  console.log(posts);
  return (
    <Box>
      <Container className="body-user-container">
        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            width: "414px",
            height: "371px",
          }}
        >
          <ClientImages posts={posts} />
        </Box>
        <Box sx={{ width: "750px", height: "532px" }}>
          <AddPost
            user={user}
            handleRefresh={handleRefresh}
            addPost={addPost}
          />
          <ClientPosts deletePost={deletePost} posts={posts} />
        </Box>
      </Container>
    </Box>
  );
};

export default ClientBody;
