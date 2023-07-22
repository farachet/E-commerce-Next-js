
'use client'
import React, { useState } from 'react';
import styles from './page.module.css'
import { Box, Button , appBarClasses , Avatar , Input, Select, MenuItem } from "@mui/material";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useRouter} from 'next/navigation'
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import Link from 'next/link'
import axios from 'axios';
// import {ecommerceContext} from "../../ecommerceContext/e-commerceContext"

interface Props{
  email: string;
  password:string;
  role: string;
}

const Login: React.FC <Props> = () => {
    // const {handleUser,currentUser}=useContext(ecommerceContext)
    const [show , setShow] = useState(false)
    const [email,setEmail]= useState ("")
    const [password,setPassword]= useState ("")
    const [role, setRole] = useState("");


    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event:any) => {
      event.preventDefault();
    };


    const handleChangeRole=(e : any )=>{
      setRole(e.target.value)
    }
    const handleSubmit= ()=>{
    
      axios.post('http://localhost:3001/api/user/signin',{
      email:email,
      password:password,
      role:role
      }).then(res=>{
        
        console.log("welcome",res.data.existUser.role)
        localStorage.setItem("token",res.data.acsessToken)
        localStorage.setItem("role",res.data.existUser.role)
    
        if(res.data.acsessToken){
          // handleUser(res.data.existUser)
          router.push("/Home")
         console.log(res.data)
        }else{
          console.log("home")
           alert("invalid username or password")
            setEmail("") 
            setPassword("")
        }
      })
        .catch(err=>console.log(err))
    
    }
    
    return (
      <div className={styles.rect}>
      <Box style={{  background: 'linear-gradient(123deg, #984D38 0%, #181E41 63%)' ,
    
         }}>
<Box>
      

        
        <Box 
        style={{
          width: 70,
                height: 150,
                marginTop: -10,
          }}
            > 
             <img className={styles.Image8 }
             style={{
              marginLeft : 306 ,
               marginTop : 100  ,
                borderRadius:0 ,
                 outline: 'none' ,
                  justifyContent : "center" 
                  }}
                  />
             </Box>

             <Typography
              style={{
                color: "white",
                fontSize: 30,
                fontFamily: "SF Pro Display",
                letterSpacing: 0.30,
                wordWrap: "break-word",
                fontWeight: "800",
                marginLeft: 120,
                marginTop: 450,
              }}
            >
              Explore the world of meta fashion
            </Typography>

             </Box>
             <Box
           
            style={{
              width: 490,
              height:700,
              left: 699,
              top: 130,
              position: "absolute",
              background: "rgba(255, 255, 255, 0.10)",
              boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.15)",
              borderRadius: 10,
            }}
          >
       

<Link href="/">
<Typography 
variant="h1" component="h2" 
style={{
     color : "white" ,
      fontSize: 30 ,
       fontFamily: 'SF Pro Display' ,
        letterSpacing: 0.30 ,
         wordWrap: 'break-word' ,
          fontWeight: '800' ,
           marginLeft : 35 ,
            marginTop : 20
            }}
            >
     Login
    </Typography>
</Link>
    <Box>
    <Typography variant="h1" component="h5"
     style={{ 
        color : "white" ,
         fontSize: 15 ,
          fontFamily: 'SF Pro Display' ,
           letterSpacing: 0.30 ,
            wordWrap: 'break-word'  ,
             marginLeft : 35 ,
              marginTop: 50
              }}>
     New user ?
    </Typography>
    <Link href="/auth/register"><Typography variant="h1" component="h5" 
    style={{ 
      fontSize: 18 ,
       fontFamily: 'SF Pro Display' ,
        letterSpacing: 0.36 ,
         wordWrap: 'break-word'  ,
          marginLeft : 110 ,
           marginTop: -20,  color: '#6C5DD3',
     fontWeight: '500',
     }}
     >
     Create an account
    </Typography>
    </Link>
    </Box>


    <Box >

    <FormControl 
        sx={{ m: 1, width: '46.5ch' }} 
        variant="standard">
          <InputLabel 
          style={{ color: "white" }} 
          >
            Email
            </InputLabel>
          <Input 
          style={{ color: "white" }}   
 value={email}
 onChange={(e) => setEmail(e.target.value)}
 id="standard-start-adornment"
  endAdornment={
              <InputAdornment 
              position="start">
              </InputAdornment>
            }
          />
 </FormControl>

   {!show && (
        <Box className="Frame1" style={{ width: 70, height: 10, paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10, background: 'linear-gradient(214deg, #B75CFF 0%, #671AE4 100%)', borderRadius: 121, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' , marginLeft: 330 , marginTop : 20}}>
          <Button onClick={()=>setShow(true)} style={{color: 'white', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}> Continue</Button>
        </Box>
      )}

      {show && (
        <Box>
          <FormControl 
        sx={{ m: 1, width: '46.5ch' }} 
        variant="standard">
          <InputLabel 
          style={{ color: "white" }} 
          htmlFor="standard-adornment-password">
            Password
            </InputLabel>
          <Input 
          style={{ color: "white" }}   
 value={password}
 onChange={(e) => setPassword(e.target.value)}
 id="filled-adornment-password"
 type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

          <Box>
            <Typography
              variant="h5"
              style={{
                color: "white",
                fontSize: 20,
                fontFamily: "SF Pro Display",
                letterSpacing: 0.30,
                wordWrap: "break-word",
                fontWeight: "800",
                marginLeft: 35,
                marginTop: 20,
              }}
            >
              Role
            </Typography>
            <Select
              value={role}
              onChange={(e) => {
                handleChangeRole(e)
                console.log(e.target.value)
              }}
              sx={{ m: 1, width: "52ch" }}
              variant="standard"
            >
              <MenuItem value="client">Client</MenuItem>
              <MenuItem value="seller">Seller</MenuItem>
            </Select>
          </Box>
          <Box className="Frame1" 
          style={{ 
            width: 70,
             height: 10,
              paddingLeft: 20,
               paddingRight: 20,
                paddingTop: 10,
                 paddingBottom: 10,
                  background: 'linear-gradient(214deg, #B75CFF 0%, #671AE4 100%)',
                   borderRadius: 121,
                    justifyContent: 'center',
                     alignItems: 'center',
                      gap: 10,
                       display: 'inline-flex' ,
                        marginLeft: 330 ,
                         marginTop : 20
                         }}
                         >
            <Button type='button' onClick={()=>handleSubmit()}
             style={{
              color: 'white',
               fontSize: 15,
                fontFamily: 'Poppins',
                 fontWeight: '300',
                  wordWrap: 'break-word'
                  }}
                  >
                    Log In
                  </Button>
          </Box>
        </Box>
      )}
            </Box>
           
            <Box 
             style={{
              width: '100%',
               height: '100%',
                position: 'relative' 
                }}
                >
            
          <Box 
           style={{
            width: 380, 
            height: 52,
             left: 60, 
             top: 30, 
             position: 'absolute',
              borderRadius: 171,
               border: '0.25px white solid'
               }} 
               />
         <Box 
          style={{
            width: 222,
             height: 30,
              left: 119, 
              top: 21.50, 
              position: 'absolute'
              }}
              >
          <Box 
           style={{
            width: 15,
             height: 15,
              left: -25,
               top: 15, 
               position: 'absolute'
               }}
               >
        <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png">
        </Avatar>
          </Box>
        <Box 
         style={{
          left: 24,
           top: 26,
            position: 'absolute',
             color: 'white', 
             fontSize: 18, 
             fontFamily: 'SF Pro Display',
              fontWeight: '500',
               letterSpacing: 0.36, 
               wordWrap: 'break-word'
               }}
               >
                Continue With Google
               </Box>
        </Box>
            </Box>
            <Box  
            style={{
              width: '100%',
               height: '100%',
               position: 'relative' ,
                 marginTop : -630
                 }}
                 > 
            <Box 
             style={{
              width: 380,
               height: 52,
                left: 60, 
                top: 30,
                 position: 'absolute',
                  borderRadius: 171, 
                  border: '0.25px #1877F2 solid' ,
                   background: '#1877F2'
                   }}
                   />
            <Box  style={{
              width: 222, 
              height: 30,
               left: 119, 
               top: 21.50, 
               position: 'absolute'
               }}
               >
            <Box 
             style={{
              width: 30,
               height: 30,
                left: -22,
                 top: 14, 
                 position: 'absolute'
                 }}
                 >
            <Avatar src="https://static.vecteezy.com/system/resources/previews/018/930/476/original/facebook-logo-facebook-icon-transparent-free-png.png">
            </Avatar>
            </Box>
            <Box 
            style={{
              left: 24,
               top: 26,
                position: 'absolute',
                 color: 'white',
                  fontSize: 18,
                   fontFamily: 'SF Pro Display',
                    fontWeight: '500', 
                    letterSpacing: 0.36, 
                    wordWrap: 'break-word'
                    }}
                    >
                      Continue With facebook
                      </Box>
            </Box>
            </Box>


            <Box  
            style={{
              width: '100%',
               height: '100%',
                position: 'relative' ,
                 marginTop : -630
                 }}
                 > 
            <Box 
             style={{
              width: 380,
               height: 52,
                left: 60, 
                top: 30,
                 position: 'absolute',
                  borderRadius: 171, 
                  border: '0.25px black solid' ,
                   background: 'black'
                   }}
                   />
            <Box  style={{
              width: 250, 
              height: 60,
               left: 119, 
               top: 21.50, 
               position: 'absolute'
               }}
               >
            <Box 
             style={{
              width: 30,
               height: 30,
                left: -25,
                 top: 17, 
                 position: 'absolute'
                 }}
                 >
            <Avatar src="https://www.tabletowo.pl/wp-content/uploads/2020/06/apple-logo-tabletowo-10-lecie.jpg">
            </Avatar>
            </Box>
            <Box 
            style={{
              left: 24,
               top: 26,
                position: 'absolute',
                 color: 'white',
                  fontSize: 18,
                   fontFamily: 'SF Pro Display',
                    fontWeight: '500', 
                    letterSpacing: 0.36, 
                    wordWrap: 'break-word'
                    }}
                    >
                      Continue With Appel
                      </Box>
            </Box>
            </Box>
          </Box>
          </Box>
        </div>
        
          
    );
}

export default Login;