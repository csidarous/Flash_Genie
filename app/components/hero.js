import { Container, Button, Typography, Box } from '@mui/material';

const Hero = () => {
  return (
    <section id="hero">
    <Container 
      maxWidth="md"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '60vh',
        background: 'linear-gradient(135deg, rgba(30,30,30,1) 0%, rgba(0,0,0,1) 100%)',
        color: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 12px 24px rgba(0, 0, 0, 0.7)',
        p: 4,
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box 
        sx={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          background: 'radial-gradient(circle, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 70%)', 
          zIndex: -1 
        }}
      />
      <Typography 
        variant="h2" 
        component="h1" 
        gutterBottom
        sx={{
          fontWeight: 'bold',
          fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
          background: 'linear-gradient(90deg, rgba(255,105,180,1) 0%, rgba(0,204,255,1) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          mb: 4,
        }}
      >
        Welcome to Flashcard SaaS
      </Typography>
      <Typography 
        variant="h5" 
        component="h2" 
        gutterBottom
        sx={{
          fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
          mb: 4,
          color: '#e0e0e0',
        }}
      >
        The easiest way to create flashcards from your text.
      </Typography>
      <Button 
        variant="contained" 
        color="secondary" 
        href="/sign-up"
        sx={{ 
          mt: 4, 
          padding: '10px 20px', 
          fontSize: '1rem',
          background: 'linear-gradient(90deg, rgba(255,105,180,1) 0%, rgba(0,204,255,1) 100%)',
          '&:hover': {
            background: 'linear-gradient(90deg, rgba(255,105,180,0.8) 0%, rgba(0,204,255,0.8) 100%)',
          },
        }}
      >
        Get Started with Free Version
      </Button>
    </Container>
    </section>
  );
}

export default Hero;
