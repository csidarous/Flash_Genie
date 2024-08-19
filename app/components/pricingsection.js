import { Container, Button, Box, CardContent, Card, Typography, Grid } from '@mui/material';
import getStripe from '/utils/get-stripe'; // Ensure this file exists and exports a function to get Stripe instance

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

    return (
        <Container maxWidth="md">
            <Box sx={{ my: 6, textAlign: 'center' }}>
                <Typography 
                    variant="h4" 
                    component="h2" 
                    gutterBottom
                    sx={{
                        fontWeight: 'bold',
                        mb: 4,
                        fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                        color: '#ffd700', // Gold color for the title
                        textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
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
                                background: 'linear-gradient(135deg, rgba(30,30,30,1) 0%, rgba(70,70,70,1) 100%)', // Dark gradient background
                                color: '#f1f1f1',
                                borderRadius: '12px',
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                '&:hover': {
                                    transform: 'translateY(-10px)',
                                    boxShadow: '0 12px 24px rgba(0,0,0,0.5)',
                                },
                            }}
                        >
                            <CardContent>
                                <Typography 
                                    variant="h5" 
                                    gutterBottom
                                    sx={{
                                        fontWeight: 'bold',
                                        fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
                                        color: '#ffd700', // Gold color for the plan title
                                    }}
                                >
                                    Free Plan
                                </Typography>
                                <Typography 
                                    variant="h6" 
                                    color="#ffd700" 
                                    gutterBottom
                                >
                                    $0/month
                                </Typography>
                                <Typography 
                                    variant="body1" 
                                    sx={{ mb: 2, color: '#e0e0e0' }}
                                >
                                    Get started with our free plan, which includes basic features like text input and basic flashcard generation.
                                </Typography>
                                <Button 
                                    variant="outlined" 
                                    sx={{ 
                                        borderColor: '#ffd700', 
                                        color: '#ffd700', 
                                        '&:hover': {
                                            borderColor: '#f1f1f1',
                                            color: '#f1f1f1',
                                        }
                                    }} 
                                    href="/generate"
                                >
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
                                background: 'linear-gradient(135deg, rgba(10,10,30,1) 0%, rgba(20,20,60,1) 100%)', // Deep blue gradient background
                                color: '#f1f1f1',
                                borderRadius: '12px',
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                '&:hover': {
                                    transform: 'translateY(-10px)',
                                    boxShadow: '0 12px 24px rgba(0,0,0,0.5)',
                                },
                            }}
                        >
                            <CardContent>
                                <Typography 
                                    variant="h5" 
                                    gutterBottom
                                    sx={{
                                        fontWeight: 'bold',
                                        fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
                                        color: '#ffd700', // Gold color for the plan title
                                    }}
                                >
                                    Pro Plan
                                </Typography>
                                <Typography 
                                    variant="h6" 
                                    color="#ffd700" 
                                    gutterBottom
                                >
                                    $1.99/month
                                </Typography>
                                <Typography 
                                    variant="body1" 
                                    sx={{ mb: 2, color: '#e0e0e0' }}
                                >
                                    Upgrade to the Pro plan for advanced features, including smart flashcards, unlimited usage, and priority support.
                                </Typography>
                                <Button 
                                    variant="contained" 
                                    sx={{ 
                                        background: 'linear-gradient(90deg, rgba(255,105,180,1) 0%, rgba(0,204,255,1) 100%)', // Gradient background
                                        color: '#1a1a40',
                                        '&:hover': {
                                            background: 'linear-gradient(90deg, rgba(255,105,180,0.8) 0%, rgba(0,204,255,0.8) 100%)',
                                        }
                                    }} 
                                    onClick={handleCheckout}
                                >
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
