import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Products from '../features/product/routes/Products';
import NotFound from './NotFound';

const ProductDetail = React.lazy(() => import('../features/product/routes/ProductDetail'));

export default function ProtectedRoutes() {
    return (
        <>
            <ResponsiveAppBar />
            <Routes>
                <Route path="products" element={<Products />} />
                <Route path="products/:id" element={<ProductDetail />} />
                <Route path="/" element={<Products />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}
