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
    <Container maxWidth="md">
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Features
      </Typography>
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card 
              sx={{ 
                height: '100%', 
                transition: 'transform 0.3s, box-shadow 0.3s', 
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
                },
              }}
            >
              <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Box sx={{ textAlign: 'center', mb: 2 }}>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {feature.title}
                  </Typography>
                </Box>
                <Typography variant="body1">
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
