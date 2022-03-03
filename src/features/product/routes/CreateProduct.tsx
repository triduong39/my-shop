import React, { useEffect } from 'react';
import Layout from '../../../components/Layout';
import { createProduct } from '../redux/productSlice';
import { useAppDispatch } from '../../../hooks/useAppDispatch';

import ProductForm from '../components/ProductForm';
import { onSubmitProductFormProps } from '../types';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { Alert, CircularProgress, Stack } from '@mui/material';
import { fetchListCategory } from '../../category/redux/categorySlice';

export default function CreateProduct() {
    const dispatch = useAppDispatch();
    const { listCategory, status: categoryStatus, error: categoryError } = useAppSelector((state) => state.category);

    useEffect(() => {
        dispatch(fetchListCategory());
    }, []);

    const handleSubmit = (data: onSubmitProductFormProps) => {
        dispatch(createProduct(data));
    };

    if (categoryStatus === 'error' && categoryError) {
        return <Alert severity="error">{categoryError}</Alert>;
    }

    if (categoryStatus === 'loading' || !listCategory) {
        return (
            <Layout>
                <Stack justifyContent="center" alignItems="center">
                    <CircularProgress />
                </Stack>
            </Layout>
        );
    }

    return (
        <Layout maxWidth="md">
            <ProductForm
                categoryData={listCategory}
                title="Create product"
                buttonText="Create"
                handleSubmit={handleSubmit}
            />
        </Layout>
    );
}
