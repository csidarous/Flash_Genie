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
        <Container maxWidth="md">
            <Box sx={{ my: 6, textAlign: 'center' }}>
                <Typography variant="h4" component="h2" gutterBottom>
                    Pricing
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {/* Free Plan */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Card
                            sx={{
                                height: '100%',
                                backgroundColor: '#2c2c54', // Dark purple background
                                color: '#f1f1f1',
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                '&:hover': {
                                    transform: 'translateY(-10px)',
                                    boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
                                },
                            }}
                        >
                            <CardContent>
                                <Typography variant="h5" gutterBottom>
                                    Free Plan
                                </Typography>
                                <Typography variant="h6" color="textSecondary" gutterBottom>
                                    $0/month
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 2 }}>
                                    Get started with our free plan, which includes basic features like text input and basic flashcard generation.
                                </Typography>
                                <Button variant="outlined" sx={{ borderColor: '#f1f1f1', color: '#f1f1f1' }} href="/generate">
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
                                backgroundColor: '#1a1a40', // Dark blue background
                                color: '#f1f1f1', // Gold text color
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                '&:hover': {
                                    transform: 'translateY(-10px)',
                                    boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
                                },
                            }}
                        >
                            <CardContent>
                                <Typography variant="h5" gutterBottom>
                                    Pro Plan
                                </Typography>
                                <Typography variant="h6" color="textSecondary" gutterBottom>
                                    $1.99/month
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 2 }}>
                                    Upgrade to the Pro plan for advanced features, including smart flashcards, unlimited usage, and priority support.
                                </Typography>
                                <Button variant="contained" sx={{ backgroundColor: '#ffd700', color: '#1a1a40' }} onClick={handleCheckout}>
                                    Subscribe
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
export default Pricing;
