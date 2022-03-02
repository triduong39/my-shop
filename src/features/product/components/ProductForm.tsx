import React, { useEffect } from 'react';
import { Autocomplete, Box, Button, Chip, Paper, Stack, TextField, Typography } from '@mui/material';
import { onSubmitProductFormProps, Product } from '../types';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import ListImage from './ListImage';

const schema = yup.object().shape({
    name: yup.string().required(),
    images: yup.array().of(yup.string().required()).min(1),
    originalPrice: yup.number().required(),
    salePrice: yup.number().required().max(yup.ref('originalPrice'), 'Cannot bigger than originalPrice'),
    shortDescription: yup.string().required(),
});

type ProductFormProps = {
    defaultValue: Product;
    handleSubmit: (data: onSubmitProductFormProps) => void;
};

export default function ProductForm({ defaultValue, handleSubmit: handleFormSubmit }: ProductFormProps) {
    const defaultValueDTO = {
        name: defaultValue.name,
        images: defaultValue.images,
        originalPrice: defaultValue.originalPrice,
        salePrice: defaultValue.salePrice,
        shortDescription: defaultValue.shortDescription,
    };

    const {
        control,
        handleSubmit,
        setValue,
        reset,
        watch,
        formState: { errors },
    } = useForm<onSubmitProductFormProps>({
        resolver: yupResolver(schema),
        defaultValues: defaultValueDTO,
    });
    const images = watch('images');

    useEffect(() => {
        // reset form
        reset();
    }, [defaultValue]);

    const onSubmit: SubmitHandler<onSubmitProductFormProps> = (data) => {
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
            <Paper elevation={16} sx={{ p: 4 }}>
                <Typography variant="h3" component="h1" align="center" sx={{ mb: 3 }}>
                    Edit Product
                </Typography>
                <Stack spacing={2}>
                    <ListImage images={images} size="lg" hover={false} />

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

                    <Controller
                        name="images"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                            <Autocomplete
                                multiple
                                id="tags-filled"
                                options={[]}
                                freeSolo
                                {...field}
                                onChange={(e, value: string[]) => {
                                    setValue('images', value);
                                }}
                                renderTags={(value: string[], getTagProps) =>
                                    value.map((option: string, index: number) => (
                                        <Chip
                                            variant="outlined"
                                            label={option}
                                            {...getTagProps({ index })}
                                            key={index}
                                        />
                                    ))
                                }
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Images"
                                        placeholder="Favorites"
                                        error={Boolean(errors.images)}
                                        helperText={errors.images && 'Images must contain at least 1!'}
                                    />
                                )}
                            />
                        )}
                    />

                    <Controller
                        name="originalPrice"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                            <TextField
                                label="Original Price"
                                type="number"
                                error={Boolean(errors.originalPrice)}
                                helperText={errors?.originalPrice?.message}
                                {...field}
                            />
                        )}
                    />

                    <Controller
                        name="salePrice"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                            <TextField
                                label="Sale Price"
                                type="number"
                                error={Boolean(errors.salePrice)}
                                helperText={errors?.salePrice?.message}
                                {...field}
                            />
                        )}
                    />

                    <Controller
                        name="shortDescription"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                            <TextField
                                label="Short Description"
                                error={Boolean(errors?.shortDescription)}
                                helperText={errors?.shortDescription?.message}
                                {...field}
                            />
                        )}
                    />
                    {/* 
                    <TextField
                        label="Name"
                        focused
                        {...register('name')}
                        defaultValue={name}
                        error={Boolean(errors.name)}
                        helperText={errors?.name?.message}
                    />

                    <Autocomplete
                        multiple
                        id="tags-filled"
                        {...register('images')}
                        options={[]}
                        defaultValue={images}
                        freeSolo
                        renderTags={(value: string[], getTagProps) =>
                            value.map((option: string, index: number) => (
                                <Chip variant="outlined" label={option} {...getTagProps({ index })} key={index} />
                            ))
                        }
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="filled"
                                label="freeSolo"
                                placeholder="Favorites"
                                error={Boolean(errors.images)}
                            />
                        )}
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
                    /> */}

                    <Button type="submit" fullWidth variant="contained" size="large">
                        Edit
                    </Button>
                </Stack>
            </Paper>
        </Box>
    );
}
