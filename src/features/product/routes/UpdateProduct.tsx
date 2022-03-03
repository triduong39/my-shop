import React, { useEffect } from 'react';
import { Stack, CircularProgress, Alert } from '@mui/material';
import { useParams } from 'react-router-dom';
import Layout from '../../../components/Layout';
import { fetchListProductDetail, updateProduct } from '../redux/productSlice';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';

import ProductForm from '../components/ProductForm';
import { onSubmitProductFormProps } from '../types';
import { fetchListCategory } from '../../category/redux/categorySlice';

export default function UpdateProduct() {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const { productDetail, status: productStatus, error: productError } = useAppSelector((state) => state.product);
    const { listCategory, status: categoryStatus, error: categoryError } = useAppSelector((state) => state.category);

    useEffect(() => {
        dispatch(fetchListCategory());
        if (id) {
            dispatch(fetchListProductDetail(id));
        }
    }, []);

    if (productStatus === 'error' && productError) {
        return <Alert severity="error">{productError}</Alert>;
    }
    if (categoryStatus === 'error' && categoryError) {
        return <Alert severity="error">{categoryError}</Alert>;
    }

    const renderLoading = (
        <Layout>
            <Stack justifyContent="center" alignItems="center">
                <CircularProgress />
            </Stack>
        </Layout>
    );

    if (productStatus === 'loading' || !productDetail) {
        return renderLoading;
    }

    if (categoryStatus === 'loading' || !listCategory) {
        return renderLoading;
    }

    const handleSubmit = (data: onSubmitProductFormProps) => {
        dispatch(updateProduct({ id: Number(id), ...data }));
    };

    return (
        <Layout maxWidth="md">
            <ProductForm
                title="Update product"
                buttonText="Update"
                categoryData={listCategory}
                defaultValue={productDetail}
                handleSubmit={handleSubmit}
            />
        </Layout>
    );
}
