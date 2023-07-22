"use client"
import React , {useEffect , useState}from 'react'
import { Container,Box, Typography , TextField} from '@mui/material'
import Avatar from '@mui/material/Avatar';
import style from "./page.module.css"
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';

interface seller {
  id: number;
  firstName: string;
  lastName: number;
  email : string;
}

const Profil = () => {

  const [open, setOpen] = React.useState(false)
  const [data, setData] = useState<seller[]>([]);
  const [firstName , setFirstName ] = useState("")
  const [lastName , setLastName ] = useState("")
  const [email , setEmail ] = useState("")

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }


  const fetch = () => {
    axios
    .get(`http://localhost:3001/api/seller/getOne/1`)
      .then((res) => {
        console.log(res.data)
        setData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    fetch()
    }, []);



  const updateProfile = (firstName : string , lastName : string, email : string) => {
    
      axios.put(`http://localhost:3001/api/seller/Update/1`, {

      firstName : firstName ,
      lastName : lastName ,
      email : email 
})
.then(res => {
  console.log(res)
  fetch()
})
.then(err => {
  console.log(err)
})

  }

  return (
   <Box   >
    <Container 
    className={style.Headercontainer} >
      <Box >
       <Avatar  
               src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg"
               sx={{ 
                 width: "100%"
                 ,height: 375
                 ,borderRadius:"5px",
                 opacity:0.6,
                  
               }}
            />
            <Box className={style.iconcontainer}>
            <ModeEditOutlineIcon style={{ color: 'white' }}  />
            </Box>
           

 {data.map((el) => (
        <Box key={el.id}>
        <Box  sx={{width:120
            ,height:120,
            flexShrink:0,
            display:"flex", 
            justifyContent:'center',
            flexDirection:"column"
            ,alignItems:"center",
          }} 
          className={style.avatarcontainer}>
            <Avatar
            alt='profile'
            src='https://media.istockphoto.com/id/1407659288/vector/portrait-of-a-smiling-young-woman-with-brown-flowing-hair-a-girl-in-a-white-t-shirt-is.jpg?s=612x612&w=0&k=20&c=iZrAjWoAWB1Ikxnm6gqN4q44tlLn6qXojgijdQYDRwM='
            sx={{width: "100%", height: "100%"}}
          />

          
          <Box
            sx={{
              width: '31px',
              height: '31px',
              backgroundColor: '#6C5DD3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              bottom: '2px',
              right: '-7px',
              borderRadius: '50%',
              padding: '5px',
            }}
          >
            <PhotoCameraIcon sx={{ color: 'white' }} />
            <Box className={style.profileinfo}>
              <Typography variant='h4' sx={{ color: 'white', width: 'max-content' }}>
                {el.firstName} {el.lastName}
              </Typography>
              <Typography
                sx={{ width: 'max-content', color: 'rgba(255,255,255,0.40)', fontSize: 18 }}
              >
                {el.email}
              </Typography>
            </Box>
            </Box> 
          </Box>
        </Box>
      ))}
 

            
              <Button
              className={style.editbtn}
              sx={{
                position:"absolute",
                right:"20px",
                bottom:"27%",
                backgroundColor:"#6C5DD3",
                color:"white",
                padding:"10px",
                borderRadius:"15px",

                

              }}>
                
               <ModeEditOutlineIcon onClick={handleClickOpen} /> Edit Profile </Button>  
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
          <Button onClick={() => { 
             updateProfile(firstName, lastName, email) 
             handleClose()

          }} 
              >Edit</Button>
        </DialogActions>
      </Dialog>
              <Box>
                <Typography 
                variant='body1'
                sx={{color: 'rgba(255,255,255,0.80)',textAlign:"center"}}

                >Introducing an exceptional seller who possesses unparalleled expertise in providing top-notch 
                products and an unrivaled shopping experience. Look no further, for this seller is dedicated to 
                bringing you the absolute best. With a reputation for excellence, their commitment to customer 
                satisfaction shines through every transaction. Trust in their extensive knowledge and remarkable 
                selection, as they go above and beyond to ensure you find the perfect product .
                </Typography>
              </Box>
    </Container>
    </Box>
 

  )
}

export default Profil