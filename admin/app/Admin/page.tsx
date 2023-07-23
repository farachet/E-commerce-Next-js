"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';

import CategoryIcon from '@mui/icons-material/Category';



const drawerWidth = 240;

interface Props {
  Collection: { name: string; image: string };
  id: number;
  categoryname: string;
  image: string;
  Stock: number;
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div >

    <div >
    <Toolbar  />
    <Divider />
    <List>
      <ListItem key="Categories" disablePadding>
        <ListItemButton component="a" href="/Admin/Category"> 
          <ListItemIcon>
            {<AssignmentIcon/>}
          </ListItemIcon>
          <ListItemText primary="Categories" />
        </ListItemButton>
      </ListItem>
      <ListItem key="Clients" disablePadding>
        <ListItemButton component="a" href="/Admin/Clients"> 
          <ListItemIcon>
            {<AccessibilityNewIcon/>}
          </ListItemIcon>
          <ListItemText primary="Clients" />
        </ListItemButton>
      </ListItem>
      <ListItem key="Sellers" disablePadding>
        <ListItemButton component="a" href="/Admin/Sellers"> 
          <ListItemIcon>
            {<AddShoppingCartIcon/>}
          </ListItemIcon>
          <ListItemText primary="Sellers" />
        </ListItemButton>
      </ListItem>
      <ListItem key="Requests" disablePadding>
        <ListItemButton component="a" href="/Admin/Requests"> 
          <ListItemIcon>
            {<RequestQuoteIcon/>}
          </ListItemIcon>
          <ListItemText primary="Requests" />
        </ListItemButton>
      </ListItem>

      <ListItem key="Products" disablePadding>
        <ListItemButton component="a" href="/Admin/Products"> 
          <ListItemIcon>
          {<CategoryIcon/>}
          </ListItemIcon>
         
          <ListItemText primary="Products" />
        </ListItemButton>
      </ListItem>

    </List>
    <Divider />
  </div>
  </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (

    <div>

    <Box  sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
      position="fixed"
      className='bar'
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        background: 'linear-gradient(113.49deg, #984D38 -30.3%, #181E41 58.12%)', // Set the background to the specified gradient
      }}
    >
      <Toolbar >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          ADMIN Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
         onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth , background: '#A9A9A9'},
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />

        <Typography paragraph style={{ fontSize: '60px' ,color:'white',marginLeft:'450px',marginTop:'200px'}}>
          Welcome To Your Dashboard
</Typography>



      </Box>
    </Box>

    
    </div>

  );
}
