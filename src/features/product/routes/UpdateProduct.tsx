import React, { useEffect } from 'react';
import { Stack, CircularProgress, Alert } from '@mui/material';
import { useParams } from 'react-router-dom';
import Layout from '../../../components/Layout';
import { fetchListProductDetail, updateProduct } from '../redux/productSlice';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';

import ProductForm from '../components/ProductForm';
import { onSubmitProductFormProps } from '../types';

export default function UpdateProduct() {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const { productDetail, status, error } = useAppSelector((state) => state.product);

    useEffect(() => {
        if (id) {
            dispatch(fetchListProductDetail(id));
        }
    }, []);

    if (status === 'error' && error) {
        return <Alert severity="error">{error}</Alert>;
    }

    if (status === 'loading' || !productDetail) {
        return (
            <Layout>
                <Stack justifyContent="center" alignItems="center">
                    <CircularProgress />
                </Stack>
            </Layout>
        );
    }

    const handleSubmit = (data: onSubmitProductFormProps) => {
        dispatch(updateProduct({ id: Number(id), ...data }));
    };

    return (
        <Layout maxWidth="md">
            <ProductForm defaultValue={productDetail} handleSubmit={handleSubmit} />
        </Layout>
    );
}
