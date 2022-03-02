import { CircularProgress, createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material';
import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import CustomRouter from '../routes/CustomRouter';
import { history } from '../utils/history';
import AuthProvider from './AuthProvider';

type AppProviderProps = {
    children: React.ReactNode;
};

const theme = responsiveFontSizes(createTheme({ palette: { mode: 'light' } }));

export default function AppProvider({ children }: AppProviderProps) {
    return (
        <Suspense fallback={<CircularProgress />}>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <AuthProvider>
                        <CustomRouter history={history}>{children}</CustomRouter>
                    </AuthProvider>
                </ThemeProvider>
            </Provider>
        </Suspense>
    );
}
