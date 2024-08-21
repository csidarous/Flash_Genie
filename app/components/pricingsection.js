import { Container, Button, Box, CardContent, Card, Typography, Grid } from '@mui/material';
import getStripe from '/utils/get-stripe'; // Make sure this file exists and exports a function to get Stripe instance

const Pricing = () => {
    const handleCheckout = async () => {
        const checkoutSession = await fetch('/api/checkout_session', {
          method: 'POST',
          headers: { origin: 'http://localhost:3000' },
        });
        const checkoutSessionJson = await checkoutSession.json();
        console.log('Session ID:', checkoutSessionJson.id); // Add this line

        const stripe = await getStripe();
        const { error } = await stripe.redirectToCheckout({
          sessionId: checkoutSessionJson.id,
        });
    
        if (error) {
          console.warn(error.message);
        }
      };

    return(
        <section id="pricing">
        <Container 
            maxWidth="md"
            sx={{
                py: 6,
                backgroundColor: '#1a1a1a', // Dark background
                color: '#f5f5f5', // Lighter text color for better contrast
                borderRadius: '12px',
                boxShadow: '0 12px 24px rgba(0, 0, 0, 0.7)',
                padding: '1rem',
            }}
        >
            <Box sx={{ my: 6, textAlign: 'center' }}>
                <Typography 
                    variant="h4" 
                    component="h2" 
                    gutterBottom 
                    align="center"
                    sx={{
                        fontWeight: 'bold',
                        mb: 4,
                        fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                        background: 'linear-gradient(90deg, rgba(255,165,0,1) 0%, rgba(255,69,0,1) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    Pricing
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {/* Free Plan */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Card
                            sx={{
                                height: '100%',
                                backgroundColor: '#2a2a2a', // Slightly lighter background for better contrast
                                color: '#ffffff', // White text for clarity
                                borderRadius: '12px',
                                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-10px)',
                                    boxShadow: '0 8px 16px rgba(0,0,0,0.6)',
                                },
                            }}
                        >
                            <CardContent
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    padding: '2rem',
                                }}
                            >
                                <Typography variant="h5" gutterBottom>
                                    Free Plan
                                </Typography>
                                <Typography variant="h6" color="textSecondary" gutterBottom sx={{ color: '#ffeb3b' }}>
                                    $0/month
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 2, color: '#e0e0e0' }}>
                                    Get started with our free plan, which includes basic features like text input and basic flashcard generation.
                                </Typography>
                                <Button variant="outlined" sx={{ borderColor: '#ffeb3b', color: '#ffeb3b' }} href="/sign-up">
                                    Get Started
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Pro Plan */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Card
                            sx={{
                                height: '100%',
                                backgroundColor: '#333333', // Slightly darker background for distinction
                                color: '#ffffff', // White text for clarity
                                borderRadius: '12px',
                                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-10px)',
                                    boxShadow: '0 8px 16px rgba(0,0,0,0.6)',
                                },
                            }}
                        >
                            <CardContent
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    padding: '2rem',
                                }}
                            >
                                <Typography variant="h5" gutterBottom>
                                    Pro Plan
                                </Typography>
                                {/* <Typography variant="h6" color="textSecondary" gutterBottom sx={{ color: '#ffd700' }}>
                                    $1.99/month
                                </Typography> */}
                                <Typography variant="body1" sx={{ mb: 2, color: '#e0e0e0' }}>
                                    Upgrade to the Pro plan for advanced features, including smart flashcards, unlimited usage, and priority support.
                                </Typography>
                                <Button variant="contained" sx={{ backgroundColor: '#ffd700', color: '#333333' }} href="/waitlistForm">
                                    Join Waitlist
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Container>
        </section>
    );
}
export default Pricing;
