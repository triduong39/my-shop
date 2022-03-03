import React from 'react';
import Layout from '../../../components/Layout';
import { createProduct } from '../redux/productSlice';
import { useAppDispatch } from '../../../hooks/useAppDispatch';

import ProductForm from '../components/ProductForm';
import { onSubmitProductFormProps } from '../types';

export default function CreateProduct() {
    const dispatch = useAppDispatch();

    const handleSubmit = (data: onSubmitProductFormProps) => {
        dispatch(createProduct(data));
    };

    return (
        <Layout maxWidth="md">
            <ProductForm title="Create product" buttonText="Create" handleSubmit={handleSubmit} />
        </Layout>
    );
}
