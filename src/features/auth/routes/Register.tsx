import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import RegisterForm from '../components/RegisterForm';

export default function Register() {
    const navigate = useNavigate();
    return (
        <Layout>
            <RegisterForm onSuccess={() => navigate('/product/123')} />
        </Layout>
    );
}
