import React, { useEffect } from 'react';
import { Alert, CircularProgress, Pagination, Stack } from '@mui/material';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { fetchListProduct } from '../redux/productSlice';
import { useSearchParams } from 'react-router-dom';
import { DEFAULT_FETCH_LIMIT, DEFAULT_FETCH_PAGE } from '../../../config';
import TableProduct from '../components/TableProduct';
import Layout from '../../../components/Layout';
import { fetchListCategory } from '../../category/redux/categorySlice';
import ListCategory from '../components/ListCategory';
import { listProductRoute } from '../types';

export default function Products() {
    const dispatch = useAppDispatch();
    const [searchParams, setSearchParams] = useSearchParams();

    const { listProduct, status: productStatus, error: productError } = useAppSelector((state) => state.product);
    const { listCategory, status: categoryStatus, error: categoryError } = useAppSelector((state) => state.category);

    const _page = searchParams.get('_page');
    const _limit = searchParams.get('_limit');
    const category = searchParams.get('category');

    const page = Number(_page) || DEFAULT_FETCH_PAGE;
    const limit = Number(_limit) || DEFAULT_FETCH_LIMIT;

    useEffect(() => {
        const params = {
            categoryId: category || '',
            _page: page,
            _limit: limit,
        };
        dispatch(fetchListProduct(params));
    }, [category, _page, _limit]);

    useEffect(() => {
        dispatch(fetchListCategory());
    }, []);

    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        let params: listProductRoute = {
            _page: value.toString(),
        };
        // if limit and category not exist then no need to put on params
        if (limit != DEFAULT_FETCH_LIMIT) {
            params = {
                ...params,
                _limit: limit.toString(),
            };
        }
        if (category) {
            params = {
                ...params,
                category: category,
            };
        }
        setSearchParams(params);
    };

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

    if (productStatus === 'loading' || !listProduct?.data) {
        return renderLoading;
    }

    if (categoryStatus === 'loading' || !listCategory) {
        return renderLoading;
    }

    const handleItemClick = (categoryId: string) => {
        setSearchParams({
            category: categoryId,
        });
    };
    // status === 'success' and listProduct.data has data
    return (
        <>
            <Layout sx={{ mt: 4 }}>
                <ListCategory categories={listCategory} handleItemClick={handleItemClick} />
                <Stack alignItems={'flex-end'} spacing={3}>
                    <TableProduct rows={listProduct.data} />
                    <Pagination
                        count={Math.ceil(listProduct.totalRows / limit)}
                        defaultPage={listProduct.page}
                        variant="outlined"
                        shape="rounded"
                        onChange={handleChangePage}
                    />
                </Stack>
            </Layout>
        </>
    );
}
