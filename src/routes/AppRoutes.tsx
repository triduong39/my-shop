import { CircularProgress } from '@mui/material';
import React from 'react';

import { useAuth } from '../Provider/AuthProvider';
import ProtectedRoutes from './ProtectedRoutes';
import PublicRoutes from './PublicRoutes';

export default function AppRoutes() {
    const { isLogged, loading } = useAuth();
    if (loading) {
        return <CircularProgress />;
    }
    return isLogged ? <ProtectedRoutes /> : <PublicRoutes />;
}
