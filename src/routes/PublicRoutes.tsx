import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const Login = React.lazy(() => import('../features/auth/routes/Login'));
const Register = React.lazy(() => import('../features/auth/routes/Register'));

export default function PublicRoutes() {
    return (
        <Routes>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="/" element={<Login />} />
            <Route path="*" element={<Navigate replace to="/login" />} />
        </Routes>
    );
}
