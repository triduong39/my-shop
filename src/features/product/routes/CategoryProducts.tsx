import React, { useEffect } from 'react';
import { Alert, CircularProgress, Pagination, Stack } from '@mui/material';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { fetchCategoryProducts } from '../redux/productSlice';
import { useParams, useSearchParams } from 'react-router-dom';
import { DEFAULT_FETCH_LIMIT, DEFAULT_FETCH_PAGE } from '../../../config';
import TableProduct from '../components/TableProduct';
import Layout from '../../../components/Layout';

export default function CategoryProducts() {
    const { categoryId } = useParams();
    const dispatch = useAppDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const categoryProducts = useAppSelector((state) => state.product.categoryProducts);
    const status = useAppSelector((state) => state.product.status);
    const error = useAppSelector((state) => state.product.error);

    const _page = searchParams.get('_page');
    const _limit = searchParams.get('_limit');

    const page = Number(_page) || DEFAULT_FETCH_PAGE;
    const limit = Number(_limit) || DEFAULT_FETCH_LIMIT;

    useEffect(() => {
        if (categoryId) {
            const params = {
                _page: page,
                _limit: limit,
            };
            const action = {
                categoryId,
                ...params,
            };
            dispatch(fetchCategoryProducts(action));
        }
    }, [_page, _limit]);

    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        setSearchParams({ _page: value.toString(), _limit: limit.toString() });
    };

    console.log(categoryProducts);

    if (status === 'error' && error) {
        return <Alert severity="error">{error}</Alert>;
    }

    if (status === 'loading' || !categoryProducts?.data) {
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
                {/* <ListCategory /> */}
                <Stack alignItems={'flex-end'} spacing={3}>
                    <TableProduct rows={categoryProducts.data} />
                    <Pagination
                        count={Math.ceil(categoryProducts.totalRows / limit)}
                        defaultPage={categoryProducts.page}
                        variant="outlined"
                        shape="rounded"
                        onChange={handleChangePage}
                    />
                </Stack>
            </Layout>
        </>
    );
}
