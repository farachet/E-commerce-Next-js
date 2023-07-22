import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Paper,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
type Props = {
  posts: Posts[];
};

const ClientImages: React.FC<Props> = ({ posts }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };


  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          padding: "20px",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h2" sx={{ fontSize: 20, color: "white" }}>
          Photos
        </Typography>
        <Typography
          onClick={handleOpen}
          variant="h2"
          sx={{ fontSize: 20, color: "#6C5DD3" }}
        >
          See All Photos
        </Typography>
        <div>
          <Dialog
            open={open}
            onClose={handleClose}
            fullWidth
            sx={{
              "& .MuiDialog-container": {
                "& .MuiPaper-root": {
                  width: "100%",
                  maxWidth: "500px!important",
                },
              },
            }}
          >
            <DialogTitle sx={{textAlign:"center",fontWeight:"bold"}}>ALL Photos</DialogTitle>
            <DialogContent>
              <Box
                sx={{
                  diplay: "flex",
                  flexDirection: "column",
                  gap: "30px",
                }}
              >
                {posts.map((ele) => (
                  <Avatar
                    key={ele.id}
                    src={ele.image}
                    alt="img"
                    sx={{
                      width: "100%",
                      height: "300px",
                      borderRadius: "5px",
                      marginBottom: "30px",
                    }}
                  />
                ))}
              </Box>
            </DialogContent>
          </Dialog>
        </div>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {posts.slice(0,9).map((ele) => (
          <Avatar
            key={ele.id}
            src={ele.image}
            alt="img"
            sx={{ width: "105px", height: "91px", borderRadius: "5px" }}
          />
        ))}
    
      </Box>
    </Container>
  );
};

export default ClientImages;
