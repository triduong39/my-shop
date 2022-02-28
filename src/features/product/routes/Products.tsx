import React, { useEffect } from 'react';
import { Typography } from '@mui/material';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { fetchListProduct } from '../redux/productSlice';
import { useSearchParams } from 'react-router-dom';
import { Pagination } from '../types';

export default function Products() {
    const dispatch = useAppDispatch();
    const [searchParams, setSearchParams] = useSearchParams();

    console.log('searchParams', searchParams);
    console.log('get', searchParams.get('_page'));

    const pagination: Pagination = {
        _page: Number(searchParams.get('_page')) || 1,
        _limit: Number(searchParams.get('_limit')) || 10,
    };

    const listProduct = useAppSelector((state) => state.product.listProduct);

    console.log('listProduct', listProduct);

    useEffect(() => {
        dispatch(fetchListProduct(pagination));
    }, []);
    return (
        <Typography variant="h3" component="h1" align="center" sx={{ mb: 3 }}>
            Products bibam
        </Typography>
    );
}
