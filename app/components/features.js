import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material';

const features = [
  {
    title: 'Easy Text Input',
    description: 'Quickly input your text to generate flashcards with minimal effort. Simply paste your content and let the AI do the work.',
  },
  {
    title: 'Smart Flashcards',
    description: 'Our AI creates intelligent flashcards that summarize key information, helping you learn and retain knowledge more effectively.',
  },
  {
    title: 'Accessible Anywhere',
    description: 'Access your flashcards from any device, at any time. Study on the go with seamless cross-platform support.',
  },
];

const Features = () => {
  return (
    <Container 
      maxWidth="md" 
      sx={{
        py: 6,
        backgroundColor: '#121212',
        color: '#e0e0e0',
        borderRadius: '12px',
        boxShadow: '0 12px 24px rgba(0, 0, 0, 0.7)',
        padding: '1rem', // Adding padding for a more spacious feel
      }}
    >
      <Typography 
        variant="h4" 
        component="h2" 
        gutterBottom 
        align="center"
        sx={{
          fontWeight: 'bold',
          mb: 4,
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
          background: 'linear-gradient(90deg, rgba(255,0,150,1) 0%, rgba(0,204,255,1) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Features
      </Typography>
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card 
              sx={{ 
                height: '100%', 
                backgroundColor: '#1c1c1c',
                color: '#e0e0e0',
                borderRadius: '12px',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 16px 32px rgba(0, 0, 0, 0.6)',
                },
              }}
            >
              <CardContent 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '2rem', // Adding padding inside the card
                }}
              >
                <Box 
                  sx={{ 
                    mb: 2,
                    background: 'linear-gradient(135deg, rgba(255,105,180,0.8), rgba(0,204,255,0.8))',
                    borderRadius: '50%',
                    width: '80px',
                    height: '80px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  <Typography 
                    variant="h5" 
                    component="h3" 
                    gutterBottom
                    sx={{
                      fontWeight: 'bold',
                      fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                      color: '#fff',
                    }}
                  >
                    {feature.title}
                  </Typography>
                </Box>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                    color: '#b0b0b0',
                    mt: 2,
                  }}
                >
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Features;
