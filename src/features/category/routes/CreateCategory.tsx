import React from 'react';
import Layout from '../../../components/Layout';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import CategoryForm from '../components/CategoryForm';
import { createCategory } from '../redux/categorySlice';
import { SubmitCategoryFormType } from '../types';

export default function CreateCategory() {
    const dispatch = useAppDispatch();

    const handleSubmit = (data: SubmitCategoryFormType) => {
        dispatch(createCategory(data));
    };

    return (
        <Layout maxWidth="sm">
            <CategoryForm title="Create category" buttonText="Create" handleSubmit={handleSubmit} />
        </Layout>
    );
}
