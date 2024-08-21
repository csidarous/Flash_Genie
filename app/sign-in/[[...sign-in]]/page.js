'use client';
import { SignedIn, SignIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Container, Toolbar, Button, AppBar, Box, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

export default function SignInPage() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <Container>
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

      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" sx={{ minHeight: '100vh' }}>
        <Typography variant="h4" >Sign In</Typography>
        <SignIn afterSignInUrl="/generate"/>
      </Box>
    </Container>
  );
}
