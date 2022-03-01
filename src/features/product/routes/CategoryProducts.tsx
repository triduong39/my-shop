import React, { useEffect } from 'react';
import { Alert, CircularProgress, Pagination, Stack } from '@mui/material';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { fetchCategoryProducts } from '../redux/productSlice';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { DEFAULT_FETCH_LIMIT, DEFAULT_FETCH_PAGE } from '../../../config';
import TableProduct from '../components/TableProduct';
import Layout from '../../../components/Layout';
import ListCategory from '../components/ListCategory';
import { fetchListCategory } from '../../category/redux/categorySlice';

export default function CategoryProducts() {
    const { categoryId } = useParams();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [searchParams, setSearchParams] = useSearchParams();

    const {
        categoryProducts,
        status: categoryProductsStatus,
        error: categoryProductsError,
    } = useAppSelector((state) => state.product);
    const { listCategory, status: categoryStatus, error: categoryError } = useAppSelector((state) => state.category);

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
    }, [categoryId, _page, _limit]);

    useEffect(() => {
        dispatch(fetchListCategory());
    }, []);

    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        setSearchParams({ _page: value.toString(), _limit: limit.toString() });
    };

    if (categoryProductsStatus === 'error' && categoryProductsError) {
        return <Alert severity="error">{categoryProductsError}</Alert>;
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

    if (categoryProductsStatus === 'loading' || !categoryProducts?.data) {
        return renderLoading;
    }
    if (categoryStatus === 'loading' || !listCategory) {
        return renderLoading;
    }

    // status === 'success' and listProduct.data has data
    const handleItemClick = (categoryId: string) => {
        navigate(`/categories/${categoryId}/products`);
    };
    return (
        <>
            <Layout sx={{ mt: 4 }}>
                <ListCategory categories={listCategory} handleItemClick={handleItemClick} />
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
