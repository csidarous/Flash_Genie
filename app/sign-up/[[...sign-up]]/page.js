import {SignedIn, SignIn, SignedOut, SignUp, UserButton } from "@clerk/nextjs";
import {Container, Toolbar, Button, AppBar, Box, Typography} from'@mui/material';

export default function SignUpPage() {
  return (
    <Container>
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
    <Box display ="flex" flexDirection="column" alignItems="center" jsutifyContent = "center">
      <Typography variant="h4">Sign Up</Typography>
        <SignUp />
    </Box>
    </Container>
  );
}