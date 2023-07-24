"use client"
import React, { useState, FormEvent } from "react";
import {
  Box,
  Typography,
  Link,
  Input,
  Button,
  Avatar,
  // Snackbar,
} from "@mui/material"; // Import Snackbar from MUI
import axios from "axios";
import  { useRouter } from 'next/navigation';


type LoginProps = {
  setLogin: (loginType: string) => void;
};

function Login({ setLogin }: LoginProps) {
  const [email, setEmail] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);

  const router=useRouter()

  function validateForm(): boolean {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit() {
   console.log('zzzzz')

    if (validateForm()) {
      console.log("Form submitted successfully");
    } else {
      console.log("Please fill in all required fields");
    }

    axios
      .post(`http://localhost:3001/api/mail/sendMail`, {
        username: email,
        password: password,
      })
      .then((res) => {
       
        navigateToAdmin();
      })   
        .catch((err) => console.error(err));
  }
  const navigateToAdmin = () => {
    console.log('aaaa');
    
    router.push ('/Admin');
  };
  // alert

  function handleGeneratePwd(): void {
    const perm = (str: string): string[] | string => {
      var result: string[] = [];
      if (str.length <= 8) {
        if (str.length === 1) {
          result.push(str);
          return result;
        }
        for (var i = 0; i < str.length; i++) {
          var charsLeft = str.substring(0, i) + str.substring(i + 1);
          var innerPermutations = perm(charsLeft);
          for (var j = 0; j < innerPermutations.length; j++) {
            result.push(str[i] + innerPermutations[j]);
          }
        }

        return result;
      }
      return "too many permutations! it's gonna take a long time, almost an infinite loop";
    };

    axios
      .post(`http://localhost:3001/api/mail/sendMail`, {
        password: perm("rafikah")[Math.floor(Math.random() * 1000)],
      })
      .then((res) => console.log("success"))
      .catch((err) => console.log(err));
    setShow(true);
    setSnackbarOpen(true);
  }

  // function handleClose() {
  //   setSnackbarOpen(false);
  // }

  return (
    <div >
      <Box className="body">
        <Box
          style={{
            width: 490,
            height: 600,
            left: 699,
            top: 200,
            position: "absolute",
            background: "rgba(255, 255, 255, 0.10)",
            boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.15)",
            borderRadius: 10,
          }}
        >
          <Typography
          
            variant="h1"
            component="h2"
            style={{
              color: "white",
              fontSize: 30,
              fontFamily: "SF Pro Display",
              letterSpacing: 0.3,
              wordWrap: "break-word",
              fontWeight: "800",
              marginLeft: 35,
              marginTop: 20,
            }}
          >
            Login
          </Typography>
          <Box>
            <Typography
              variant="h1"
              component="h5"
              style={{
                color: "white",
                fontSize: 15,
                fontFamily: "SF Pro Display",
                letterSpacing: 0.3,
                wordWrap: "break-word",
                marginLeft: 35,
                marginTop: 50,
              }}
            >
              New user ?
            </Typography>
            <Link href="/signup">
              <Typography
                variant="h1"
                component="h5"
                style={{
                  fontSize: 15,
                  fontFamily: "SF Pro Display",
                  letterSpacing: 0.3,
                  wordWrap: "break-word",
                  marginLeft: 110,
                  marginTop: -20,
                  color: "#6C5DD3",
                  fontWeight: "500",
                 // letterSpacing: 0.36,
                }}
              >
                Create an account
              </Typography>
            </Link>
          </Box>

          <Box>
            <Typography
              style={{
                color: "white",
                fontSize: 18,
                fontFamily: "SF Pro Display",
                fontWeight: "400",
                letterSpacing: 0.36,
                wordWrap: "break-word",
                marginTop: 55,
                marginLeft: 30,
              }}
            >
              Email Address
            </Typography>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="Line381"
              style={{
                width: 250,
                fontFamily: "SF Pro Display",
                left: 30,
                top: 210,
                position: "absolute",
                border: "0.25px rgba(255, 255, 255, 0.50) solid",
                color: "white",
              }}
            />
            {!show && (
              <Box
                className="Frame1"
                style={{
                  width: 100,
                  height: 30,
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingTop: 10,
                  paddingBottom: 10,
                  background:
                    "linear-gradient(214deg, #B75CFF 0%, #671AE4 100%)",
                  borderRadius: 121,
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 10,
                  display: "inline-flex",
                  marginLeft: 330,
                  marginTop: 0,
                }}
              >
                <Box>
                  {/* Your existing code */}
                  <Button
                    onClick={() => {
                      handleGeneratePwd();
                      alert("check your mail!");
                    }}
                    style={{
                      color: "white",
                      fontSize: 16,
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      wordWrap: "break-word",
                    }}
                  >
                    Generate PWD
                  </Button>
                  {/* <Snackbar
                    open={snackbarOpen}
                    autoHideDuration={5000}
                    onClose={handleClose}
                    message="Check your mail"
                    ContentProps={{
                      sx: { color: "white" },
                    }}
                  /> */}
                </Box>
              </Box>
            )}

            {show && (
              <Box>
                <Typography
                  style={{
                    color: "white",
                    fontSize: 18,
                    fontFamily: "SF Pro Display",
                    fontWeight: "400",
                    letterSpacing: 0.36,
                    wordWrap: "break-word",
                    marginTop: 55,
                    marginLeft: 30,
                  }}
                >
                  Password
                </Typography>
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="Line381"
                  style={{
                    width: 250,
                    fontFamily: "SF Pro Display",
                    left: 30,
                    top: 290,
                    position: "absolute",
                    border: "0.25px rgba(255, 255, 255, 0.50) solid",
                    color: "white",
                  }}
                />
                <Box
                  className="Frame1"
                  style={{
                    width: 100,
                    height: 30,
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingTop: 10,
                    paddingBottom: 10,
                    background:
                      "linear-gradient(214deg, #B75CFF 0%, #671AE4 100%)",
                    borderRadius: 121,
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 10,
                    display: "inline-flex",
                    marginLeft: 330,
                    marginTop: 0,
                  }}
                >
                  <Button
                    onClick={handleSubmit}
                    style={{
                      color: "white",
                      fontSize: 14,
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      wordWrap: "break-word",
                    }}
                  >
                    Login
                  </Button>
                </Box>
              </Box>
            )}
          </Box>

          <Box style={{ width: "100%", height: "100%", position: "relative" }}>
            <Box
              style={{
                width: 309,
                height: 52,
                left: 60,
                top: 80,
                position: "absolute",
                borderRadius: 171,
                border: "0.25px white solid",
              }}
            />
            <Box
              style={{
                width: 222,
                height: 30,
                left: 119,
                top: 70,
                position: "absolute",
              }}
            >
              <Box
                style={{
                  width: 30,
                  height: 30,
                  left: -25,
                  top: 18,
                  position: "absolute",
                }}
              >
                <Avatar
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png"
                  alt="Google Avatar"
                />
              </Box>
              <Box
                style={{
                  left: 24,
                  top: 30,
                  position: "absolute",
                  color: "white",
                  fontSize: 18,
                  fontFamily: "SF Pro Display",
                  fontWeight: "500",
                  letterSpacing: 0.36,
                  wordWrap: "break-word",
                }}
              >
                Continue With Google
              </Box>
            </Box>
          </Box>
          <Box
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
              marginTop: -430,
            }}
          >
            <Box
              style={{
                width: 309,
                height: 52,
                left: 60,
                top: 0,
                position: "absolute",
                borderRadius: 171,
                border: "0.25px white solid",
                background: "#1877F2",
              }}
            />
            <Box
              style={{
                width: 222,
                height: 30,
                left: 119,
                top: -10,
                position: "absolute",
              }}
            >
              <Box
                style={{
                  width: 30,
                  height: 30,
                  left: -25,
                  top: 18,
                  position: "absolute",
                }}
              >
                <Avatar
                  src="https://clipart-library.com/images_k/facebook-icon-transparent-background/facebook-icon-transparent-background-8.jpg"
                  alt="Facebook Avatar"
                />
              </Box>
              <Box
                style={{
                  left: 24,
                  top: 30,
                  position: "absolute",
                  color: "white",
                  fontSize: 18,
                  fontFamily: "SF Pro Display",
                  fontWeight: "500",
                  letterSpacing: 0.36,
                  wordWrap: "break-word",
                }}
              >
                Continue With Facebook
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Login;
