import React from 'react';
import './App.css';
import AppProvider from './Provider/AppProvider';
import AppRoutes from './routes/AppRoutes';

function App() {
    return (
        <AppProvider>
            <AppRoutes />
        </AppProvider>
    );
}

export default App;
