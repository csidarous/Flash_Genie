import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { AppBar, Button, Typography, Toolbar, IconButton, Menu, MenuItem } from '@mui/material';
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
    <AppBar position="static" sx={{ backgroundColor: '#333' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold', color: '#fff' }}>
          Flashcard SaaS
        </Typography>

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

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <SignedOut sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button color="inherit" href="/sign-in" sx={{ fontWeight: 'bold' }}>
              Login
            </Button>
            <Button color="inherit" href="/sign-up" sx={{ fontWeight: 'bold' }}>
              Sign Up
            </Button>
          </SignedOut>
          <SignedIn sx={{ display: { xs: 'none', sm: 'block' } }}>
            <UserButton />
          </SignedIn>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
