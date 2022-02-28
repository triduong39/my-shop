import React, { useEffect, useMemo } from 'react';
import { Typography } from '@mui/material';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { fetchListProduct } from '../redux/productSlice';
import { useSearchParams } from 'react-router-dom';

export default function Products() {
    const dispatch = useAppDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const listProduct = useAppSelector((state) => state.product.listProduct);

    const _page = searchParams.get('_page');
    const _limit = searchParams.get('_limit');

    const pagination = useMemo(() => {
        return {
            _page: Number(_page) || 1,
            _limit: Number(_limit) || 10,
        };
    }, [_page, _limit]);

    console.log('listProduct', listProduct);

    useEffect(() => {
        dispatch(fetchListProduct(pagination));
    }, [pagination]);

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
