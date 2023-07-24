"use client";
import { Avatar, Box, Container, Typography } from "@mui/material";
import React from "react";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import moment, { min } from "moment";
type Props = {
  posts: Posts[];
  deletePost: (postId: number) => void|null;
  style:any
};

const ClientPosts: React.FC<Props> = ({ posts, deletePost ,style}) => {
  console.log("pos", posts);
  if (!posts) {
    return null;
  }
  const postTime = (time: string): string => {
    const now = moment();
    const createdAt = moment(time);
    const duration = moment.duration(now.diff(createdAt));
    const minutes = duration.asMinutes();
    console.log(minutes);
    if (minutes < 1) {
      return "just now ";
    } else if (minutes < 60) {
      return `${Math.floor(minutes)}m ago`;
    }
    return "";
  };

  return (
    <div>
      {posts.map((ele) => (
        <Container
        key={ele.id}
          sx={{
            marginBottom: "20px",
          }}
        >
          <Container
            sx={{
              display: "flex",
            }}
          >
            <Container
              className="user-post-info"
              sx={{
                display: "flex",
              }}
            >
              <Avatar
                src="https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"
                sx={{ width: "43px", height: "43px" }}
              />
              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    color: "white",
                    fontSize: 20,
                    fontWeight: 600,
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                  }}
                >
                  {ele.client.firstName + " " + ele.client.lastName}{" "}
                  <Typography variant="subtitle2">
                    {postTime(ele.createdAt)}
                  </Typography>
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ color: "rgba(255, 255, 255, 0.5)" }}
                >
                  @{ele.client.firstName} fff
                </Typography>
              </Box>
            </Container>
            {deletePost ? (
              <DeleteRoundedIcon
                onClick={() => deletePost(ele.id)}
                sx={{
                  float: "right",
                  color: "red",
                  fontSize: "40px",
                  marginRight: "30px",
                  marginTop: "10px",
                  cursor: "pointer",
                }}
              />
            ) : (
              ""
            )}
          </Container>
          <Container>
            <Box>
              <Typography
                variant="body1"
                sx={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: "rgba(255, 255, 255, 1)",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              >
                {ele.content}
              </Typography>

              <Avatar
                src={ele.image}
                sx={{ width: "100%", height: "426px", borderRadius: "0px" }}
                style={style?style:{height:"426px"}}
              />
            </Box>
          </Container>
        </Container>
      ))}
    </div>
  );
};

export default ClientPosts;
