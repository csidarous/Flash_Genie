import { Container, Button, Typography, Box } from '@mui/material';

const Hero = () => {
    return(
        <Container maxWidth="md">
            <Box sx={{ textAlign: 'center', my: 4 }}>
            <Typography variant="h2" component="h1" gutterBottom>
                Welcome to Flashcard SaaS
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
                The easiest way to create flashcards from your text.
            </Typography>
            
            </Box>
        </Container>
    )
}
export default Hero;