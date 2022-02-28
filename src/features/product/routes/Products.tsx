import React, { useEffect } from 'react';
import { Typography } from '@mui/material';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { fetchListProduct } from '../redux/productSlice';
import { useSearchParams } from 'react-router-dom';
import { DEFAULT_FETCH_LIMIT, DEFAULT_FETCH_PAGE } from '../../../config';

export default function Products() {
    const dispatch = useAppDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const listProduct = useAppSelector((state) => state.product.listProduct);

    const _page = searchParams.get('_page');
    const _limit = searchParams.get('_limit');

    console.log('listProduct', listProduct);

    useEffect(() => {
        const params = {
            _page: Number(_page) || DEFAULT_FETCH_PAGE,
            _limit: Number(_limit) || DEFAULT_FETCH_LIMIT,
        };
        dispatch(fetchListProduct(params));
    }, [_page, _limit]);

    return (
        <>
            <Typography variant="h3" component="h1" align="center" sx={{ mb: 3 }}>
                Products bibam
            </Typography>
            <button
                onClick={() => {
                    setSearchParams({ _page: '1' });
                }}
            >
                click here
            </button>
        </>
    );
}
