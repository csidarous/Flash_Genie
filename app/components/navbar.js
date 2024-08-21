import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { AppBar, Button, Typography, Toolbar, IconButton, Menu, MenuItem, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar 
      position="static" 
      sx={{ backgroundColor: '#333', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)' }} 
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        
        <Typography 
          variant="h4" 
          sx={{ fontWeight: 'bold', color: '#fff', letterSpacing: '0.05em' }}
        >
          FlashGenie
        </Typography>
        
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: '2rem' }}>
          <Button color="inherit" href="#features" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
            Features
          </Button>
          <Button color="inherit" href="#pricing" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
            Pricing
          </Button>
        </Box>
        
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: '1rem' }}>
          <SignedOut>
            <Button color="inherit" href="/sign-in" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
              Login
            </Button>
            <Button 
              variant="contained" 
              color="secondary" 
              href="/sign-up" 
              sx={{ fontWeight: 'bold', fontSize: '1.1rem', borderRadius: '20px' }}
            >
              Sign Up
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Box>

        <IconButton 
          edge="start" 
          color="inherit" 
          aria-label="menu" 
          onClick={handleMenuOpen}
          sx={{ display: { xs: 'block', sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          sx={{ display: { xs: 'block', sm: 'none' } }}
        >
          <MenuItem onClick={handleMenuClose} component="a" href="#features">
            Features
          </MenuItem>
          <MenuItem onClick={handleMenuClose} component="a" href="#pricing">
            Pricing
          </MenuItem>
          <SignedOut>
            <MenuItem onClick={handleMenuClose} component="a" href="/sign-in">
              Login
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component="a" href="/sign-up">
              Sign Up
            </MenuItem>
          </SignedOut>
          <SignedIn>
            <MenuItem onClick={handleMenuClose}>
              <UserButton />
            </MenuItem>
          </SignedIn>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
