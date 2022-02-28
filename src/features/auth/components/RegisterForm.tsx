import React from 'react';
import { Box, Button, Divider, Paper, Stack, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';

import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

type onSubmitProps = {
    email: string;
    password: string;
    confirmPassword: string;
};

const AppPaper = styled(Paper)`
    margin-top: 80px;
    border-radius: 1rem;
    padding: 2rem;
`;

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null]),
});

export default function RegisterForm() {
    const { register, handleSubmit } = useForm<onSubmitProps>({
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<onSubmitProps> = (data) => console.log(data);

    return (
        <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
            <AppPaper elevation={16}>
                <Typography variant="h3" component="h1" align="center" sx={{ mb: 3 }}>
                    Register
                </Typography>
                <Stack spacing={2}>
                    <TextField label="Email" focused {...register('email')} />
                    <TextField label="Password" type="password" {...register('password')} />
                    <TextField label="Confirm Password" type="password" {...register('confirmPassword')} />
                    <Button type="submit" fullWidth variant="contained" size="large">
                        Register
                    </Button>
                    <Divider />
                </Stack>
            </AppPaper>
        </Box>
    );
}
