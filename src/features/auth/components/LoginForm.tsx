import React, { useState } from 'react';
import { Box, Button, Divider, Paper, Stack, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from '../../../Provider/AuthProvider';

type onSubmitProps = {
    email: string;
    password: string;
};

const AppPaper = styled(Paper)`
    margin-top: 80px;
    border-radius: 1rem;
    padding: 2rem;
`;

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
});

type LoginFormProps = {
    onSuccess: () => void;
};

export default function LoginForm({ onSuccess }: LoginFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<onSubmitProps>({
        resolver: yupResolver(schema),
    });
    const { signIn } = useAuth();
    const [error, serError] = useState('');

    const onSubmit: SubmitHandler<onSubmitProps> = async ({ email, password }) => {
        try {
            await signIn(email, password);
            onSuccess();
        } catch (err) {
            serError('Incorrect email or password');
        }
    };

    return (
        <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
            <AppPaper elevation={16}>
                <Typography variant="h3" component="h1" align="center" sx={{ mb: 3 }}>
                    Login
                </Typography>
                <Stack spacing={2}>
                    <TextField
                        label="Email"
                        focused
                        {...register('email')}
                        error={Boolean(errors.email)}
                        helperText={errors?.email?.message}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        {...register('password')}
                        error={Boolean(errors?.password)}
                        helperText={errors?.password?.message}
                    />
                    {error && (
                        <Typography variant="subtitle2" align="center" sx={{ color: 'red' }}>
                            {error}
                        </Typography>
                    )}
                    <Button type="submit" fullWidth variant="contained" size="large">
                        Sign In
                    </Button>
                    <Divider />
                    <Typography
                        component={Link}
                        to="/pages/register/register3"
                        variant="subtitle1"
                        sx={{ color: 'black', textDecoration: 'none', textAlign: 'center' }}
                    >
                        Don&apos;t have an account?
                    </Typography>
                </Stack>
            </AppPaper>
        </Box>
    );
}
