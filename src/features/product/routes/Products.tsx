import React, { useEffect } from 'react';
import { Alert, CircularProgress, Pagination, Stack } from '@mui/material';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { fetchListProduct } from '../redux/productSlice';
import { useSearchParams } from 'react-router-dom';
import { DEFAULT_FETCH_LIMIT, DEFAULT_FETCH_PAGE } from '../../../config';
import TableProduct from '../components/TableProduct';
import Layout from '../components/Layout';

export default function Products() {
    const dispatch = useAppDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const listProduct = useAppSelector((state) => state.product.listProduct);
    const status = useAppSelector((state) => state.product.status);
    const error = useAppSelector((state) => state.product.error);

    const _page = searchParams.get('_page');
    const _limit = searchParams.get('_limit');

    const page = Number(_page) || DEFAULT_FETCH_PAGE;
    const limit = Number(_limit) || DEFAULT_FETCH_LIMIT;

    useEffect(() => {
        const params = {
            _page: page,
            _limit: limit,
        };
        dispatch(fetchListProduct(params));
    }, [_page, _limit]);

    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        setSearchParams({ _page: value.toString(), _limit: limit.toString() });
    };

    if (status === 'error' && error) {
        return <Alert severity="error">{error}</Alert>;
    }

    if (status === 'loading' || !listProduct?.data) {
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
            <Layout sx={{ mt: 4 }}>
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
