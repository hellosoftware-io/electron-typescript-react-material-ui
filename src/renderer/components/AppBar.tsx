import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import appLogo from "../../../static/logo-v1.svg";
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';

function Header() {

  return (
    <AppBar position="static" sx={{ bgcolor: 'red'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <img src={appLogo} style={{width:'60px'}}/> 

         <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 4,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.5rem',
              color: 'inherit',
              textDecoration: 'none',
              paddingLeft: 3,
            }}
          >
            Bet SignIn 
          </Typography>
          

          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;