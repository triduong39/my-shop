import React, { useEffect } from 'react';
import { Alert, Button, CircularProgress, Stack } from '@mui/material';
import Layout from '../../../components/Layout';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import TableCategory from '../components/TableCategory';
import { fetchListCategory } from '../redux/categorySlice';
import { NavLink } from 'react-router-dom';

import AddIcon from '@mui/icons-material/Add';

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
        <Layout sx={{ mt: 4 }} maxWidth="md">
            <Stack direction={'row'} justifyContent="end" spacing={3} sx={{ mb: 2 }}>
                <NavLink to={'/categories/create'} style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="success" endIcon={<AddIcon />}>
                        Create
                    </Button>
                </NavLink>
            </Stack>
            <TableCategory rows={listCategory} />
        </Layout>
    );
}
