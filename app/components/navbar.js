import {SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
// import { useState } from 'react';
import { AppBar, Button, Typography, Toolbar } from '@mui/material';

const NavBar = () => {
    return(
      <AppBar position="static">

        <Toolbar>
          <Typography variant="h6" style={{flexGrow: 1}}>
            Flashcard SaaS
          </Typography>
          <SignedOut>
            <Button color="inherit" href="/sign-in">Login</Button>
            <Button color="inherit" href="/sign-up">Sign Up</Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>

    )

}

export default NavBar;