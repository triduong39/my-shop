import React, { useEffect } from 'react';
import { Alert, CircularProgress, Pagination, Stack } from '@mui/material';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { deleteProduct, fetchListProduct } from '../redux/productSlice';
import { useSearchParams } from 'react-router-dom';
import { DEFAULT_FETCH_LIMIT } from '../../../config';
import TableProduct from '../components/TableProduct';
import Layout from '../../../components/Layout';
import { fetchListCategory } from '../../category/redux/categorySlice';
import ListCategory from '../components/ListCategory';
import { listProductRoute } from '../types';

const getParamsFC = (categoryId: string | null, _page: string | null, _limit: string | null) => {
    let params: listProductRoute = {};
    if (categoryId) {
        params = {
            ...params,
            categoryId: categoryId,
        };
    }
    if (_limit) {
        params = {
            ...params,
            _limit,
        };
    }
    if (_page) {
        params = {
            ...params,
            _page,
        };
    }
    return params;
};

export default function Products() {
    const dispatch = useAppDispatch();
    const [searchParams, setSearchParams] = useSearchParams();

    const { listProduct, status: productStatus, error: productError } = useAppSelector((state) => state.product);
    const { listCategory, status: categoryStatus, error: categoryError } = useAppSelector((state) => state.category);

    const categoryId = searchParams.get('categoryId');
    const _page = searchParams.get('_page');
    const _limit = searchParams.get('_limit');

    useEffect(() => {
        const params = getParamsFC(categoryId, _page, _limit);
        dispatch(fetchListProduct(params));
    }, [categoryId, _page, _limit]);

    useEffect(() => {
        dispatch(fetchListCategory());
    }, []);

    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        const params = getParamsFC(categoryId, value.toString(), _limit);
        setSearchParams(params);
    };

    const handleItemClick = (categoryId: string) => {
        setSearchParams({
            categoryId: categoryId,
        });
    };

    const handleDeleteProduct = (id: number) => {
        dispatch(deleteProduct(id.toString()));
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

    const pageCount = Math.ceil(listProduct.totalRows / (Number(_limit) || DEFAULT_FETCH_LIMIT));
    // status === 'success' and listProduct.data has data
    return (
        <>
            <Layout sx={{ mt: 4 }}>
                <ListCategory categories={listCategory} handleItemClick={handleItemClick} />
                <Stack alignItems={'flex-end'} spacing={3}>
                    <TableProduct rows={listProduct.data} handleDeleteProduct={handleDeleteProduct} />
                    <Pagination
                        count={pageCount}
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
