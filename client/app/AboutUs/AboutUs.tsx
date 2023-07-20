import React from 'react';
import { Box, Typography, Button, Avatar } from '@mui/material';

import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className='backGround'>
      <Box className="box1">
        <Typography className="about">About Us</Typography>
        <Typography className="who">Who we are</Typography>
        <Typography className="b">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate tortor ipsum neque nulla. Et turpis scelerisque vulputate elementum, egestas neque scelerisque turpis. Adipiscing lacus vel lobortis sit tincidunt enim, libero. In dignissim tortor sit sit convallis morbi.
        </Typography>
        <Button className="button1" variant="contained" href="#contained-buttons">
          more +
        </Button>
      </Box>

      <div className="containerboximg">
        <Box className="box2">
          <Typography className="about">Since 2014</Typography>
          <Typography className="who">What We Do</Typography>
          <Typography className="b">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate tortor ipsum neque nulla. Et turpis scelerisque vulputate elementum, egestas neque scelerisque turpis. Adipiscing lacus vel lobortis sit tincidunt enim, libero. In dignissim tortor sit sit convallis morbi.
          </Typography>
          <Button className="button1" variant="contained" href="#contained-buttons">
            more +
          </Button>
        </Box>

        <img className="img1" style={{ width: '18%', height: '250px', boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.35)', borderRadius: 10 }} src="https://www.futoncompany.co.uk/images/detailed/45/Glow_Lamp__24_.jpg?fbclid=IwAR2-CMFkvlotutZ0jE-tHqlhQ2gQIZCFfqzbmNNFqt0tUlK5L6QV0sp7XQ8" alt="Description" />
      </div>

      <div className="containerboximg">
        <img className="img2" style={{ width: '18%', height: '250px', boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.35)', borderRadius: 10 }} src="https://www.futoncompany.co.uk/images/detailed/45/Forest_Lamp__4_.jpg?fbclid=IwAR2WxsnbXw7ECU-WgxS47-7I646wZTXcdZXYhxOFG31JFIRo5149ZysUGHY" alt="Description" />
        <Box className="box3">
          <Typography className="about">Since 2014</Typography>
          <Typography className="who">When We Started</Typography>
          <Typography className="b">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate tortor ipsum neque nulla. Et turpis scelerisque vulputate elementum, egestas neque scelerisque turpis. Adipiscing lacus vel lobortis sit tincidunt enim, libero. In dignissim tortor sit sit convallis morbi.
          </Typography>
          <Button className="button1" variant="contained" href="#contained-buttons">
            more +
          </Button>
        </Box>
      </div>

      <Box className="box4">
        <Typography className="who">Our Makers</Typography>
        <Typography className="b">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate tortor ipsum neque nulla. Et turpis scelerisque vulputate elementum, egestas neque scelerisque turpis. Adipiscing lacus vel lobortis sit tincidunt enim, libero. In dignissim tortor sit sit convallis morbi.
        </Typography>
      </Box>
      <Box className="grid-container">
        <div className="grid-item">
          <div className="Group48095509" style={{ width: '100%', height: '100%', position: 'relative' }}>
            <img className="Rectangle1886" style={{ width: 318, height: 360, left: 0, top: 0, borderRadius: 5 }} src="https://www.citadel.com/wp-content/uploads/2017/10/Ken_Griffin-2.jpg" alt="Description" />
            <div className="center">
              <div className="EbonyNash" style={{ color: 'white', fontSize: 22, fontFamily: 'SF Pro Display', fontWeight: '600', letterSpacing: 0.44, wordWrap: 'break-word' }}>Ebony Nash</div>
              <div className="Frame58" style={{ width: 126, height: 36, padding: 10, left: 96, top: 416, background: 'rgba(255, 255, 255, 0.20)', borderRadius: 150, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                <div className="CoFounder" style={{ textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'SF Pro Display', fontWeight: '500', letterSpacing: 0.32, wordWrap: 'break-word' }}>Co Founder</div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-item">
          <div className="Group48095509" style={{ width: '100%', height: '100%', position: 'relative' }}>
            <img className="Rectangle1886" style={{ width: 318, height: 360, left: 0, top: 0, borderRadius: 5 }} src="https://2u.com/static/b467f4c2799fa2b62562b32d2c7be92e/8b664/Chip_New.max-2880x1800.jpg" alt="Description" />
            <div className="EbonyNash" style={{ left: 99, top: 380, color: 'white', fontSize: 22, fontFamily: 'SF Pro Display', fontWeight: '600', letterSpacing: 0.44, wordWrap: 'break-word' }}>Ebony Nash</div>
            <div className="Frame58" style={{ width: 126, height: 36, padding: 10, left: 96, top: 416, background: 'rgba(255, 255, 255, 0.20)', borderRadius: 150, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
              <div className="CoFounder" style={{ textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'SF Pro Display', fontWeight: '500', letterSpacing: 0.32, wordWrap: 'break-word' }}>Co Founder</div>
            </div>
          </div>
        </div>
        <div className="grid-item">
          <div className="Group48095509" style={{ width: '100%', height: '100%', position: 'relative' }}>
            <img className="Rectangle1886" style={{ width: 318, height: 360, left: 0, top: 0, borderRadius: 5 }} src="https://images.fnlondon.com/im-814873/?width=1280&height=853" alt="Description" />
            <div className="EbonyNash" style={{ left: 99, top: 380, color: 'white', fontSize: 22, fontFamily: 'SF Pro Display', fontWeight: '600', letterSpacing: 0.44, wordWrap: 'break-word' }}>Ebony Nash</div>
            <div className="Frame58" style={{ width: 126, height: 36, padding: 10, left: 96, top: 416, background: 'rgba(255, 255, 255, 0.20)', borderRadius: 150, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
              <div className="CoFounder" style={{ textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'SF Pro Display', fontWeight: '500', letterSpacing: 0.32, wordWrap: 'break-word' }}>Co Founder</div>
            </div>
          </div>
        </div>
        <div className="grid-item">
          <div className="Group48095509" style={{ width: '100%', height: '100%', position: 'relative' }}>
            <img className="Rectangle1886" style={{ width: 318, height: 360, left: 0, top: 0, borderRadius: 5 }} src="https://static01.nyt.com/images/2018/10/16/obituaries/16ALLEN1-print/merlin_78392323_fe1dc987-7d6f-4af3-967e-f54ff319dae2-superJumbo.jpg" alt="Description" />
            <div className="EbonyNash" style={{ left: 99, top: 380, color: 'white', fontSize: 22, fontFamily: 'SF Pro Display', fontWeight: '600', letterSpacing: 0.44, wordWrap: 'break-word' }}>Ebony Nash</div>
            <div className="Frame58" style={{ width: 126, height: 36, padding: 10, left: 96, top: 416, background: 'rgba(255, 255, 255, 0.20)', borderRadius: 150, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
              <div className="CoFounder" style={{ textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'SF Pro Display', fontWeight: '500', letterSpacing: 0.32, wordWrap: 'break-word' }}>Co Founder</div>
            </div>
          </div>
        </div>
        <div className="grid-item">
          <div className="Group48095509" style={{ width: '100%', height: '100%', position: 'relative' }}>
            <img className="Rectangle1886" style={{ width: 318, height: 360, left: 0, top: 0, borderRadius: 5 }} src="https://news.cornell.edu/sites/default/files/styles/breakout/public/0124_beck_0.jpg?itok=7g_UNZtj" alt="Description" />
            <div className="EbonyNash" style={{ left: 99, top: 380, color: 'white', fontSize: 22, fontFamily: 'SF Pro Display', fontWeight: '600', letterSpacing: 0.44, wordWrap: 'break-word' }}>Ebony Nash</div>
            <div className="Frame58" style={{ width: 126, height: 36, padding: 10, left: 96, top: 416, background: 'rgba(255, 255, 255, 0.20)', borderRadius: 150, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
              <div className="CoFounder" style={{ textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'SF Pro Display', fontWeight: '500', letterSpacing: 0.32, wordWrap: 'break-word' }}>Co Founder</div>
            </div>
          </div>
        </div>
        <div className="grid-item">
          <div className="Group48095509" style={{ width: '100%', height: '100%', position: 'relative' }}>
            <img className="Rectangle1886" style={{ width: 318, height: 360, left: 0, top: 0, borderRadius: 5 }} src="https://balancethegrind.co/wp-content/uploads/2019/10/balancing-the-grind-with-tobi-skovron-co-founder-ceo-of-creativecubes-co.jpg" alt="Description" />
            <div className="EbonyNash" style={{ left: 99, top: 380, color: 'white', fontSize: 22, fontFamily: 'SF Pro Display', fontWeight: '600', letterSpacing: 0.44, wordWrap: 'break-word' }}>Ebony Nash</div>
            <div className="Frame58" style={{ width: 126, height: 36, padding: 10, left: 96, top: 416, background: 'rgba(255, 255, 255, 0.20)', borderRadius: 150, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
              <div className="CoFounder" style={{ textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'SF Pro Display', fontWeight: '500', letterSpacing: 0.32, wordWrap: 'break-word' }}>Co Founder</div>
            </div>
          </div>
        </div>
      </Box>

      <Box
        className="Footer"
        style={{
          width: "100%",
          height: 500,
          position: "relative",
          marginLeft: 150,
          marginTop: 100,
        }}
      >
        <Box
          style={{
            width: 133,
            height: 202,
            left: 419,
            top: 0,
            position: "absolute",
          }}
        >
          <Typography
            className="About"
            style={{
              left: 0,
              top: 0,
              position: "absolute",
              textAlign: "center",
              color: "white",
              fontSize: 30,
              fontFamily: "Poppins",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            About
          </Typography>
          <Box
            className="Product"
            style={{
              left: 0,
              top: 50,
              position: "absolute",
              color: "rgba(255, 255, 255, 0.50)",
              fontSize: 15,
              fontFamily: "Poppins",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            Product
          </Box>
          <Typography
            className="Resource"
            style={{
              left: 0,
              top: 93,
              position: "absolute",
              color: "rgba(255, 255, 255, 0.50)",
              fontSize: 15,
              fontFamily: "Poppins",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            Resource
          </Typography>
          <Typography
            className="TermCondition"
            style={{
              left: 0,
              top: 136,
              position: "absolute",
              color: "rgba(255, 255, 255, 0.50)",
              fontSize: 15,
              fontFamily: "Poppins",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            Term & Condition
          </Typography>
          <Box
            className="Faq"
            style={{
              left: 0,
              top: 179,
              position: "absolute",
              color: "rgba(255, 255, 255, 0.50)",
              fontSize: 15,
              fontFamily: "Poppins",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            FAQ
          </Box>
        </Box>
        <Box
          className="Group22"
          style={{
            width: 119,
            height: 202,
            left: 683,
            top: 0,
            position: "absolute",
          }}
        >
          <Box
            className="Company"
            style={{
              left: -10,
              top: 0,
              position: "absolute",
              textAlign: "center",
              color: "white",
              fontSize: 30,
              fontFamily: "Poppins",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            Company
          </Box>
          <Box
            className="OurTeam"
            style={{
              left: 0,
              top: 50,
              position: "absolute",
              color: "rgba(255, 255, 255, 0.50)",
              fontSize: 15,
              fontFamily: "Poppins",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            Our Team
          </Box>
          <Box
            className="PartnerWithUs"
            style={{
              left: 0,
              top: 93,
              position: "absolute",
              color: "rgba(255, 255, 255, 0.50)",
              fontSize: 15,
              fontFamily: "Poppins",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            Partner With Us
          </Box>
          <Box
            className="PrivacyPolicy"
            style={{
              left: 0,
              top: 136,
              position: "absolute",
              color: "rgba(255, 255, 255, 0.50)",
              fontSize: 15,
              fontFamily: "Poppins",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            Privacy & Policy
          </Box>
          <Box
            className="Features"
            style={{
              left: 0,
              top: 179,
              position: "absolute",
              color: "rgba(255, 255, 255, 0.50)",
              fontSize: 15,
              fontFamily: "Poppins",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            Features
          </Box>
        </Box>
        <Box
          className="Group24"
          style={{
            width: 288,
            height: 150,
            left: 0,
            top: 0,
            position: "absolute",
          }}
        >
          <Box
            style={{

              left: 0,
              marginTop: 50,
              color: "rgba(255, 255, 255, 0.50)",
              fontSize: 19,
              fontFamily: 'Poppins',
            }}
          >
            Lorem ipsum dolor sit
            <br />
            amet, consectetur adipiscing
            <br />
            elit. Scelerisque donec non
            <br />
            pellentesque ut.
          </Box>
          <Box
            className="Logo"
            style={{
              left: 0,
              top: 0,
              position: "absolute",
              textAlign: "center",
              color: "#6C5DD3",
              fontSize: 20,
              fontFamily: "Poppins",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            LOGO
          </Box>
        </Box>
        <Box
          className="Group23"
          style={{
            width: 264,
            height: 161,
            left: 933,
            top: 0,
            position: "absolute",
          }}
        >
          <Box
            className="Contact"
            style={{
              left: -10,
              top: 0,
              position: "absolute",
              textAlign: "center",
              color: "white",
              fontSize: 30,
              fontFamily: "Poppins",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            Contact
          </Box>
          <Box
            className="0123456789"
            style={{
              left: 0,
              top: 50,
              position: "absolute",
              color: "rgba(255, 255, 255, 0.50)",
              fontSize: 15,
              fontFamily: "Poppins",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            +012 3456789
          </Box>
          <Box
            className="AdorableprogrammerGmailCom"
            style={{
              left: 0,
              top: 93,
              position: "absolute",
              color: "rgba(255, 255, 255, 0.50)",
              fontSize: 15,
              fontFamily: "Poppins",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            adorableprogrammer@gmail.com
          </Box>
          <Box
            className="Frame11"
            style={{
              width: 155,
              height: 25,
              left: 0,
              top: 136,
              position: "absolute",
              justifyContent: "center",
              alignItems: "center",
              gap: 40,
              display: "inline-flex",
            }}
          >
            <Box
              style={{
                width: 25,
                height: 25,
                position: "relative",
                background: "rgba(0, 0, 0, 0)",
              }}
            >
              <Avatar
                src="https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-06-512.png"
                style={{
                  width: 23.7,
                  height: 16.67,
                  left: 0.65,
                  top: 4.17,
                  position: "absolute",
                  background: "rgba(255, 255, 255, 0)",
                }}
              />
            </Box>
            <Box
              style={{
                width: 25,
                height: 25,
                position: "relative",
                background: "rgba(0, 0, 0, 0)",
              }}
            >
              <Avatar
                src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-512.png"
                style={{
                  width: 20.87,
                  height: 17.39,
                  left: 0.77,
                  top: 3.06,
                  position: "absolute",
                  background: "rgba(255, 255, 255, 0)",
                }}
              />
            </Box>
            <Box
              style={{
                width: 25,
                height: 25,
                position: "relative",
                background: "rgba(0, 0, 0, 0)",
              }}
            >
              <Avatar
                src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png"
                style={{
                  width: 20.87,
                  height: 20.87,
                  left: 1.4,
                  top: 2.56,
                  position: "absolute",
                  background: "rgba(255, 255, 255, 0)",
                }}
              />
            </Box>
            <Box
              style={{
                width: 25,
                height: 25,
                position: "relative",
                background: "rgba(0, 0, 0, 0)",
              }}
            >
              <Avatar
                src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-512.png"
                style={{
                  width: 20.87,
                  height: 20.87,
                  left: 0.59,
                  top: 2.82,
                  position: "absolute",
                  background: "rgba(255, 255, 255, 0)",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default AboutUs;



