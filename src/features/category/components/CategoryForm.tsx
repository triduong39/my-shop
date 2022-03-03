import React from 'react';
import { Box, Button, IconButton, Paper, Stack, TextField, Typography } from '@mui/material';
import { CategoryFormType, SubmitCategoryFormType } from '../types';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

const schema = yup.object().shape({
    name: yup.string().required(),
});

type CategoryFormProps = {
    title: string;
    buttonText: string;
    defaultValue?: CategoryFormType;
    handleSubmit: (data: SubmitCategoryFormType) => void;
};

export default function CategoryForm({
    title,
    buttonText,
    defaultValue,
    handleSubmit: handleFormSubmit,
}: CategoryFormProps) {
    const defaultValueDTO: CategoryFormType = {
        name: defaultValue?.name || '',
    };

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<SubmitCategoryFormType>({
        resolver: yupResolver(schema),
        defaultValues: defaultValueDTO,
    });

    const onSubmit: SubmitHandler<SubmitCategoryFormType> = (data) => {
        handleFormSubmit(data);
    };

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ width: '100%', mt: 4 }}
        >
            <Link to={'/categories'}>
                <IconButton aria-label="product" color="error" sx={{ mb: 2 }}>
                    <ArrowBackIcon />
                </IconButton>
            </Link>
            <Paper elevation={16} sx={{ p: 4 }}>
                <Typography variant="h3" component="h1" align="center" sx={{ mb: 3 }}>
                    {title}
                </Typography>
                <Stack spacing={2}>
                    <Controller
                        name="name"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                            <TextField
                                label="Name"
                                focused
                                error={Boolean(errors.name)}
                                helperText={errors?.name?.message}
                                {...field}
                            />
                        )}
                    />
                    <Button type="submit" fullWidth variant="contained" size="large">
                        {buttonText}
                    </Button>
                </Stack>
            </Paper>
        </Box>
    );
}
