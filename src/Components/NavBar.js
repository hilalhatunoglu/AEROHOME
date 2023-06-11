import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from '../assets/img/logo.png'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lightGreen } from '@mui/material/colors';
function NavBar() {
    const outerTheme = createTheme({
        palette: {
          primary: {
            main: lightGreen[400],
          },
        },
      });
      
      const innerTheme = createTheme({
        palette: {
          primary: {
            main: lightGreen[300],
          },
        },
      });
  const [anchorElNav, setAnchorElNav] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ThemeProvider theme={outerTheme}>
    <AppBar position="static" >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <img src={logo} width="110px" height="100px" />
            </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'white',
              textDecoration: 'none',
              marginLeft:'10px'
            }}
          >
            Smart Vertical Agriculture
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <ThemeProvider theme={innerTheme}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><Button href="/" sx={{color:'black'}}><b>HOME</b></Button></Typography>       
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" ><Button href="/Statistic" sx={{color:'black'}}><b>Statistic</b></Button></Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><Button href="/About" sx={{color:'black'}}><b>About Us</b></Button></Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><Button href="/Contact" sx={{color:'black'}}><b>Contact</b></Button></Typography>
                  </MenuItem>
                  </ThemeProvider>
            </Menu>
            
          </Box>


          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
           Smart Vertical Agriculture
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:'end' }}>
         
              <Button
                href="/"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }} >
                 <b>Home</b>
              </Button>
              
              <Button
                href='/Statistic'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }} >
                 <b>Statistic</b>
              </Button>
              <Button
                href= '/About'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }} >
                <b>About Us</b> 
              </Button>
              <Button
                href='/Contact'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }} >
                 <b>Contact</b>
              </Button>
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
}
export default NavBar;