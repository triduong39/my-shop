import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from './NotFound';

const ProductDetail = React.lazy(() => import('../features/product/routes/ProductDetail'));

export default function ProtectedRoutes() {
    return (
        <Routes>
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
