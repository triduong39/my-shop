import React from 'react';

import { useAuth } from '../Provider/AuthProvider';
import ProtectedRoutes from './ProtectedRoutes';
import PublicRoutes from './PublicRoutes';

export default function AppRoutes() {
    const { isLogged } = useAuth();
    return isLogged ? <ProtectedRoutes /> : <PublicRoutes />;
}
