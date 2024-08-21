"use client";
import React, { useState } from 'react';
import { Container, TextField, FormGroup, FormControlLabel, Checkbox, Button, Typography, Box } from '@mui/material';
import { firestore } from '/firebase'; // Ensure you import the firestore instance
import { collection, addDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';

export default function WaitlistForm() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        willingnessToPay: '',
        additionalFeatures: '',
        features: {
            cloudStorage: false,
            customization: false,
            collaboration: false,
            offlineAccess: false,
        },
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData((prevState) => ({
                ...prevState,
                features: {
                    ...prevState.features,
                    [name]: checked,
                },
            }));
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Add a new document with a generated ID to the "waitlist" collection in Firestore
            await addDoc(collection(firestore, "waitlist"), formData);
            console.log("Document successfully written!", formData);
            router.push('/');
            // Optionally, reset the form or show a success message
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 6, backgroundColor: '#121212', color: '#e0e0e0', padding: '2rem', borderRadius: '12px' }}>
            <Typography variant="h4" gutterBottom align="center">
                Join the Pro Plan Waitlist
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
                <TextField
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                    required
                    sx={{ mb: 3, backgroundColor: '#1c1c1c', color: '#e0e0e0', borderRadius: '4px', input: { color: '#fff' }, label: { color: '#e0e0e0' } }}
                />
                <TextField
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    required
                    sx={{ mb: 3, backgroundColor: '#1c1c1c', color: '#e0e0e0', borderRadius: '4px', input: { color: '#fff' }, label: { color: '#e0e0e0' } }}
                />
                <Typography variant="h6" sx={{ mt: 3 }}>
                    What features are most important to have in this application? (Select all that apply)
                </Typography>
                <FormGroup sx={{ mb: 3 }}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="cloudStorage"
                                checked={formData.features.cloudStorage}
                                onChange={handleChange}
                                sx={{ color: '#e0e0e0' }}
                            />
                        }
                        label="Cloud Storage for Flashcards"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="customization"
                                checked={formData.features.customization}
                                onChange={handleChange}
                                sx={{ color: '#e0e0e0' }}
                            />
                        }
                        label="Customization Options"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="collaboration"
                                checked={formData.features.collaboration}
                                onChange={handleChange}
                                sx={{ color: '#e0e0e0' }}
                            />
                        }
                        label="Collaboration Tools"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="offlineAccess"
                                checked={formData.features.offlineAccess}
                                onChange={handleChange}
                                sx={{ color: '#e0e0e0' }}
                            />
                        }
                        label="Offline Access"
                    />
                </FormGroup>
                <TextField
                    label="How much are you willing to pay for the Pro plan?"
                    name="willingnessToPay"
                    value={formData.willingnessToPay}
                    onChange={handleChange}
                    fullWidth
                    sx={{ mb: 3, backgroundColor: '#1c1c1c', color: '#e0e0e0', borderRadius: '4px', input: { color: '#fff' }, label: { color: '#e0e0e0' } }}
                />
                <TextField
                    label="Any additional features you would like to see?"
                    name="additionalFeatures"
                    value={formData.additionalFeatures}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    fullWidth
                    sx={{ 
                        mb: 3, 
                        backgroundColor: '#1c1c1c', 
                        borderRadius: '4px',
                        '& .MuiInputBase-input': { color: '#fff' },  // Input text color
                        '& .MuiInputLabel-root': { color: '#e0e0e0' },  // Label color
                    }}
                    InputProps={{
                        style: { color: '#fff' },  // Input text color
                    }}
                    InputLabelProps={{
                        style: { color: '#e0e0e0' },  // Label color
                    }}
                />

                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Join Waitlist
                </Button>
            </Box>
        </Container>
    );
}
