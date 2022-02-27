import { CircularProgress, createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material';
import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './AuthProvider';

type AppProviderProps = {
    children: React.ReactNode;
};

const theme = responsiveFontSizes(createTheme({ palette: { mode: 'light' } }));

export default function AppProvider({ children }: AppProviderProps) {
    return (
        <Suspense fallback={<CircularProgress />}>
            <ThemeProvider theme={theme}>
                <AuthProvider>
                    <BrowserRouter>{children}</BrowserRouter>
                </AuthProvider>
            </ThemeProvider>
        </Suspense>
    );
}
