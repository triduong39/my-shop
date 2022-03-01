import React, { useEffect } from 'react';
import { Alert, CircularProgress, Stack } from '@mui/material';
import Layout from '../../../components/Layout';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import TableCategory from '../components/TableCategory';
import { fetchListCategory } from '../redux/categorySlice';

export default function Categories() {
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

    // status === 'success' and listProduct.data has data
    return (
        <>
            <Layout sx={{ mt: 4 }} maxWidth="md">
                <Stack alignItems={'flex-end'} spacing={3}>
                    <TableCategory rows={listCategory} />
                </Stack>
            </Layout>
        </>
    );
}
