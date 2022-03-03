import React from 'react';
import {
    Autocomplete,
    Box,
    Button,
    Chip,
    IconButton,
    MenuItem,
    Paper,
    Select,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import { Category, FormProductProps, onSubmitProductFormProps, Product } from '../types';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import ListImage from './ListImage';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

const schema = yup.object().shape({
    name: yup.string().required(),
    images: yup.array().of(yup.string().required()).min(1),
    categoryId: yup.string().required(),
    originalPrice: yup.number().required().min(10000),
    salePrice: yup.number().required().max(yup.ref('originalPrice'), 'Cannot bigger than originalPrice'),
    shortDescription: yup.string().required(),
});

type ProductFormProps = {
    title: string;
    buttonText: string;
    defaultValue?: Product;
    categoryData: Category[];
    handleSubmit: (data: onSubmitProductFormProps) => void;
};

export default function ProductForm({
    title,
    buttonText,
    defaultValue,
    categoryData,
    handleSubmit: handleFormSubmit,
}: ProductFormProps) {
    let defaultValueDTO: FormProductProps = {
        name: '',
        images: [],
        categoryId: categoryData[0].id,
        originalPrice: 0,
        salePrice: 0,
        shortDescription: '',
    };
    if (defaultValue) {
        defaultValueDTO = {
            name: defaultValue.name,
            images: defaultValue.images,
            categoryId: categoryData[0].id,
            originalPrice: defaultValue.originalPrice,
            salePrice: defaultValue.salePrice,
            shortDescription: defaultValue.shortDescription,
        };
    }

    const {
        control,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<onSubmitProductFormProps>({
        resolver: yupResolver(schema),
        defaultValues: defaultValueDTO,
    });
    const images = watch('images');

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
            <Link to={'/products'}>
                <IconButton aria-label="product" color="error" sx={{ mb: 2 }}>
                    <ArrowBackIcon />
                </IconButton>
            </Link>
            <Paper elevation={16} sx={{ p: 4 }}>
                <Typography variant="h3" component="h1" align="center" sx={{ mb: 3 }}>
                    {title}
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
                        name="categoryId"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                            <Select
                                {...field}
                                label="Category"
                                onChange={(e) => setValue('categoryId', e.target.value)}
                            >
                                {categoryData.map((item) => {
                                    return (
                                        <MenuItem key={item.id} value={item.id}>
                                            {item.name}
                                        </MenuItem>
                                    );
                                })}
                            </Select>
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

                    <Button type="submit" fullWidth variant="contained" size="large">
                        {buttonText}
                    </Button>
                </Stack>
            </Paper>
        </Box>
    );
}
