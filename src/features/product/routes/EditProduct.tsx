import React, { useEffect } from 'react';
import { Stack, Typography, CircularProgress, Alert, Box, Button, TextField, Paper } from '@mui/material';
import { useParams } from 'react-router-dom';
import Layout from '../../../components/Layout';
import { fetchListProductDetail, updateProduct } from '../redux/productSlice';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';

import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ListImage from '../components/ListImage';

type onSubmitProps = {
    name: string;
    originalPrice: number;
    salePrice: number;
    shortDescription: string;
};

const schema = yup.object().shape({
    name: yup.string().required(),
    originalPrice: yup.number().required(),
    salePrice: yup.number().required().max(yup.ref('originalPrice'), 'Cannot bigger than originalPrice'),
    shortDescription: yup.string().required(),
});

export default function EditProduct() {
    const { id } = useParams();
    const dispatch = useAppDispatch();

    const { productDetail, status, error } = useAppSelector((state) => state.product);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<onSubmitProps>({
        resolver: yupResolver(schema),
    });

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

    const onSubmit: SubmitHandler<onSubmitProps> = async (data) => {
        dispatch(updateProduct({ id: Number(id), ...data }));
    };

    // status === 'success' and productDetail has data
    const { name, images, originalPrice, salePrice, shortDescription } = productDetail;

    return (
        <Layout maxWidth="md">
            <Box
                component="form"
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit(onSubmit)}
                sx={{ width: '100%', mt: 4 }}
            >
                <Paper elevation={16} sx={{ p: 4 }}>
                    <Typography variant="h3" component="h1" align="center" sx={{ mb: 3 }}>
                        Edit Product
                    </Typography>
                    <Stack spacing={2}>
                        <ListImage images={images} size="lg" hover={false} />
                        <TextField
                            label="Name"
                            focused
                            {...register('name')}
                            defaultValue={name}
                            error={Boolean(errors.name)}
                            helperText={errors?.name?.message}
                        />
                        <TextField
                            label="Original Price"
                            type="number"
                            {...register('originalPrice')}
                            defaultValue={originalPrice}
                            error={Boolean(errors.originalPrice)}
                            helperText={errors?.originalPrice?.message}
                        />
                        <TextField
                            label="Sale Price"
                            type="number"
                            {...register('salePrice')}
                            defaultValue={salePrice}
                            error={Boolean(errors.salePrice)}
                            helperText={errors?.salePrice?.message}
                        />

                        <TextField
                            label="Short Description"
                            {...register('shortDescription')}
                            defaultValue={shortDescription}
                            error={Boolean(errors?.shortDescription)}
                            helperText={errors?.shortDescription?.message}
                        />

                        <Button type="submit" fullWidth variant="contained" size="large">
                            Edit
                        </Button>
                    </Stack>
                </Paper>
            </Box>
        </Layout>
    );
}
