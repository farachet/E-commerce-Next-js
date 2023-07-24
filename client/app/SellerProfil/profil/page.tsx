//  i will write comments to make it easy for me to find code 
"use client";
import React, { useEffect, useState,useContext } from "react";
import { Container, Box, Typography, TextField } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import style from "./page.module.css";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import { ecommerceContext } from "@/app/Context/ecommerce";

interface seller {
  id: number;
  firstName: string;
  lastName: number;
  image:string;
  email: string;
}

const Profil = () => {
  const {user,handleRefreshContext}=useContext(ecommerceContext)
  console.log("currrentUser",user)
  const [open, setOpen] = React.useState(false);
  const [openPic, setOpenPic] = useState<boolean>(false);
  const [openCover, setOpenCover] = useState<boolean>(false);
  const [data, setData] = useState<seller[]>([]);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [coverPic , setCoverPic] = useState<string>("")

  // handle click on edit profil
  const handleClickOpenn = () => {
    console.log("work")
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 // handle click on picture profil
  const handleClickOpenPic = () => {
    setOpenPic(true);
  };

  const handleClosePic = () => {
    setOpenPic(false);
  };

// handle click on cover profil


 



  //  update the informations of seller
  const updateProfile = (
    firstName: string,
    lastName: string,
    email: string
  ) => {
    axios
      .put(`http://localhost:3001/api/seller/Update/${user.id}`, {
        firstName: firstName,
        lastName: lastName,
        email: email,
      })
      .then((res) => {
        handleRefreshContext()
      
      })
      .then((err) => {
        console.log(err);
      });
  };
// uploade profile image

  const uploadImage = async () => {
    if (!file) {
      console.log("select a file");
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ecommerce");

    try {
      const response = await axios.post("https://api.cloudinary.com/v1_1/dchp2ukgs/upload", formData);
      const image = response.data.secure_url;
      setImageUrl(image);
    } catch (error) {
      console.log(error);
    }
  }

  const UpdateImage = () => {
    axios.put(`http://localhost:3001/api/seller/UpdateImage/${user.id}`, {
  
      image: imageUrl,
     
    })
      .then((res: any) => {
        console.log(res.data)
        handleRefreshContext()
       
      })
      .catch(err => {
        console.log(err)
      });
  }

  
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selected = event.target.files?.[0];
    if (selected) {
      setFile(selected);
    }
  }
//  upload cover pic 
  const uploadCover = async () => {
    if (!file) {
      console.log("select a file")
      return
    }
    const formData = new FormData()
    formData.append("file", file)
    formData.append("upload_preset", "ecommerce");

    try {
      const response = await axios.post("https://api.cloudinary.com/v1_1/dchp2ukgs/upload", formData);
      const cover = response.data.secure_url
      localStorage.setItem("coverPic", cover)
      setCoverPic(cover);
     
    } 
    
    catch (error) {
      console.log(error);
    }
  }
  const handleFileChangeCover = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selected = event.target.files?.[0];
    if (selected) {
      setFile(selected);
    }
  }


  return (
    <Box>
      <Container className={style.Headercontainer}>
        <Box>
          <Avatar
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg" 

            sx={{
              width: "100%",
              height: 375,
              borderRadius: "5px",
              opacity: 0.6,
            }}
          />
          <Box className={style.iconcontainer}>
            <ModeEditOutlineIcon style={{ color: "white" }}  />
          </Box>

        
            <Box key={user.id}>
              <Box
                sx={{
                  width: 120,
                  height: 120,
                  flexShrink: 0,
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                className={style.avatarcontainer}
              >
                <Avatar
                  alt="profile"
                  src={user.image}
                  sx={{ width: "100%", height: "100%" }}
                />

                <Box
                  sx={{
                    width: "31px",
                    height: "31px",
                    backgroundColor: "#6C5DD3",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    bottom: "2px",
                    right: "-7px",
                    borderRadius: "50%",
                    padding: "5px",
                  }}
                >
                  <PhotoCameraIcon
                    sx={{ color: "white" }}
                    onClick={handleClickOpenPic}
                  />
                  <Box className={style.profileinfo}>
                    <Typography
                      variant="h4"
                      sx={{ color: "white", width: "max-content"  }}
                    >
                      {user.firstName} {user.lastName}  
                    </Typography>
                    
                    
                    <Typography>

                    </Typography>

                    <Typography
                      sx={{
                        width: "max-content",
                        color: "rgba(255,255,255,0.40)",
                        fontSize: 18,
                      }}
                    >
                      {user.email}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
      

          <Button
          onClick={handleClickOpenn}
            className={style.editbtn}
            sx={{
              position: "absolute",
              right: "20px",
              bottom: "27%",
              backgroundColor: "#6C5DD3",
              color: "white",
              padding: "10px",
              borderRadius: "15px",
            }}
          >
            <ModeEditOutlineIcon  /> Edit Profile{" "}
          </Button>
        </Box>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Edit Profil</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="First name"
              type="name"
              fullWidth
              variant="standard"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Last name"
              type="name"
              fullWidth
              variant="standard"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="email"
              type="name"
              fullWidth
              variant="standard"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button
              onClick={() => {
                updateProfile(firstName, lastName, email);
                handleClose();
              }}
            >
              Edit
            </Button>
          </DialogActions>
        </Dialog>
        <Box>
          <Typography
            variant="body1"
            sx={{ color: "rgba(255,255,255,0.80)", textAlign: "center" }}
          >
            Introducing an exceptional seller who possesses unparalleled
            expertise in providing top-notch products and an unrivaled shopping
            experience. Look no further, for this seller is dedicated to
            bringing you the absolute best. With a reputation for excellence,
            their commitment to customer satisfaction shines through every
            transaction. Trust in their extensive knowledge and remarkable
            selection, as they go above and beyond to ensure you find the
            perfect product .
          </Typography>
        </Box>

        {/* change profil pic  */}
        <Box>
          <Dialog open={openPic} onClose={handleClosePic}>
            <DialogTitle>Edit Image Profil</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                onChange={handleFileChange}
                id="name"
                label="choose image"
                type="file"
               
                variant="standard"
              />
                <Button
              onClick={() => { uploadImage() }}
              variant="contained"
              style={{
              width : 50 , 
              height : 30 ,
              right:"20px",
              bottom:"27%",
              backgroundColor:"#6C5DD3",
              color:"white",
              padding:"10px",
              borderRadius:"15px",
               marginTop: '8px'  ,
               marginLeft : 20
            }}
            >
              Upload
            </Button>
              
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClosePic}>Cancel</Button>
              <Button onClick={() => {
                UpdateImage()
                handleClosePic()
              }
                }>Edit</Button>
            </DialogActions>
          </Dialog>
        </Box>

       

      

      </Container>
    </Box>
  );
};

export default Profil;
