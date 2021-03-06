import React from "react";
import "./dashboard.css"
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const drawerWidth = 240;

export default function Dashboard() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" className="navbar" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1}}>
        <Toolbar>
           
          <Typography variant="h4" noWrap component="div">
            Hamza Bukhari
          </Typography>
           
       
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
       
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Introduction', 'Testimonial', 'Skills', 'Projects'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <ArrowForwardIosIcon  fontSize="small"/> : <ArrowForwardIosIcon  fontSize="small"/>}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
         <Divider/>
          <List>
            {['Email', 'Phone'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <MailIcon fontSize="small"/> : <LocalPhoneIcon fontSize="small"/>}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 ,backgroundColor:"black"}}>
        <Toolbar />
       <img src="../../images/mylogo.gif"/>
      </Box>
    </Box>
  );
}