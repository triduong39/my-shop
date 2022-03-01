import React, { useEffect } from 'react';
import { Grid, Stack, Typography, CircularProgress, Alert } from '@mui/material';
import { useParams } from 'react-router-dom';
import Layout from '../../../components/Layout';
import { formatToVND } from '../../../utils';
import { fetchListProductDetail } from '../redux/productSlice';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import ProductImages from '../components/ProductImages';

export default function ProductDetail() {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const productDetail = useAppSelector((state) => state.product.productDetail);
    const status = useAppSelector((state) => state.product.status);
    const error = useAppSelector((state) => state.product.error);

    useEffect(() => {
        if (id) {
            dispatch(fetchListProductDetail(id));
        }
    }, []);

    if (status === 'error' && error) {
        return <Alert severity="error">{error}</Alert>;
    }

    if (status === 'loading' || !productDetail) {
        return (
            <Layout>
                <Stack justifyContent="center" alignItems="center">
                    <CircularProgress />
                </Stack>
            </Layout>
        );
    }

    // status === 'success' and productDetail has data
    const { name, images, originalPrice, salePrice, shortDescription } = productDetail;

    return (
        <Layout>
            <Grid container spacing={2} sx={{ mt: 3 }}>
                <Grid item xs={6}>
                    <ProductImages images={images} />
                </Grid>
                <Grid item xs={6}>
                    <Stack spacing={2}>
                        <Typography variant="h3" component="h1">
                            {name}
                        </Typography>
                        {salePrice && salePrice < originalPrice ? (
                            <Stack direction="row" spacing={2}>
                                <Typography
                                    variant="h4"
                                    component="h3"
                                    sx={{ color: '#a7a7a7', textDecoration: 'line-through' }}
                                >
                                    {formatToVND(originalPrice)}
                                </Typography>
                                <Typography variant="h4" component="h2" sx={{ color: 'gold' }}>
                                    {formatToVND(salePrice)}
                                </Typography>
                            </Stack>
                        ) : (
                            <Typography variant="h4" component="h3" sx={{ color: 'gold' }}>
                                {formatToVND(originalPrice)}
                            </Typography>
                        )}
                        <div>
                            <Typography variant="h5" component="h2">
                                Description:
                            </Typography>
                            <Typography variant="body1" component="h3">
                                {shortDescription}
                            </Typography>
                        </div>
                    </Stack>
                </Grid>
            </Grid>
        </Layout>
    );
}
