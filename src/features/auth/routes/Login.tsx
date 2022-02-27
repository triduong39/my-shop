import React from 'react';
import { Button, Container, Divider, Paper, Stack, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const AppContainer = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
`;

const AppPaper = styled(Paper)`
    margin-top: 80px;
    width: 70%;
    height: auto;
    border-radius: 1rem;
    padding: 2rem;
`;

export default function Login() {
    return (
        <AppContainer maxWidth="sm">
            <AppPaper elevation={16}>
                <Typography variant="h3" component="h1" align="center" sx={{ mb: 3 }}>
                    Login
                </Typography>
                <Stack spacing={2}>
                    <TextField label="User name" focused />
                    <TextField label="Password" />
                    <Button fullWidth variant="contained" size="large">
                        Sign In
                    </Button>
                    <Divider />
                    <Typography
                        component={Link}
                        to="/pages/register/register3"
                        variant="subtitle1"
                        sx={{ color: 'black', textDecoration: 'none', textAlign: 'center' }}
                    >
                        Don&apos;t have an account?
                    </Typography>
                </Stack>
            </AppPaper>
        </AppContainer>
    );
}
