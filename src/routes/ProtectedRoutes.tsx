import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ResponsiveAppBar from '../components/ResponsiveAppBar';

const ListProduct = React.lazy(() => import('../features/product/routes/ListProduct'));
const ProductDetail = React.lazy(() => import('../features/product/routes/ProductDetail'));
const CreateProduct = React.lazy(() => import('../features/product/routes/CreateProduct'));
const UpdateProduct = React.lazy(() => import('../features/product/routes/UpdateProduct'));

const Categories = React.lazy(() => import('../features/category/routes/Categories'));
const CreateCategory = React.lazy(() => import('../features/category/routes/CreateCategory'));
const UpdateCategory = React.lazy(() => import('../features/category/routes/UpdateCategory'));

export default function ProtectedRoutes() {
    return (
        <>
            <ResponsiveAppBar />
            <Routes>
                <Route path="products" element={<ListProduct />} />
                <Route path="products/:id" element={<ProductDetail />} />
                <Route path="products/create" element={<CreateProduct />} />
                <Route path="products/edit/:id" element={<UpdateProduct />} />

                <Route path="categories/" element={<Categories />} />
                <Route path="categories/create" element={<CreateCategory />} />
                <Route path="categories/edit/:id" element={<UpdateCategory />} />

                <Route path="/" element={<ListProduct />} />
                <Route path="*" element={<Navigate replace to="/products" />} />
            </Routes>
        </>
    );
}
