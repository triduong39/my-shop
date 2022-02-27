import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from './NotFound';

const Login = React.lazy(() => import('../features/auth/routes/Login'));
const Register = React.lazy(() => import('../features/auth/routes/Register'));

export default function PublicRoutes() {
    return (
        <Routes>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
