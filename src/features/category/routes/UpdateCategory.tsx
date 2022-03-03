import React, { useEffect } from 'react';
import { Alert, CircularProgress, Stack } from '@mui/material';
import { useParams } from 'react-router-dom';
import Layout from '../../../components/Layout';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import CategoryForm from '../components/CategoryForm';
import { fetchListCategory, updateCategory } from '../redux/categorySlice';
import { SubmitCategoryFormType } from '../types';

export default function UpdateCategory() {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const listCategory = useAppSelector((state) => state.category.listCategory);
    const status = useAppSelector((state) => state.category.status);
    const error = useAppSelector((state) => state.category.error);

    useEffect(() => {
        dispatch(fetchListCategory());
    }, []);

    if (status === 'error' && error) {
        return <Alert severity="error">{error}</Alert>;
    }

    if (status === 'loading' || !listCategory) {
        return (
            <Layout>
                <Stack justifyContent="center" alignItems="center">
                    <CircularProgress />
                </Stack>
            </Layout>
        );
    }

    const handleSubmit = (data: SubmitCategoryFormType) => {
        if (id) {
            dispatch(updateCategory({ id, ...data }));
        }
    };

    const currentCategory = listCategory.find((item) => item.id === id);

    return (
        <Layout maxWidth="md">
            <CategoryForm
                defaultValue={{ name: currentCategory?.name || '' }}
                title="Update category"
                buttonText="Update"
                handleSubmit={handleSubmit}
            />
        </Layout>
    );
}
