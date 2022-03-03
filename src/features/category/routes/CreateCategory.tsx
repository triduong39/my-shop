import React from 'react';
import Layout from '../../../components/Layout';
import { createCategory } from '../redux/categorySlice';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { SubmitCategoryFormType } from '../types';
import CategoryForm from '../components/CategoryForm';

export default function CreateCategory() {
    const dispatch = useAppDispatch();

    const handleSubmit = (data: SubmitCategoryFormType) => {
        dispatch(createCategory(data));
    };

    return (
        <Layout maxWidth="md">
            <CategoryForm title="Create product" buttonText="Create" handleSubmit={handleSubmit} />
        </Layout>
    );
}
