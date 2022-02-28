import React from 'react';
import { Box, Button, Divider, Paper, Stack, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';

import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from '../../../Provider/AuthProvider';
import { Link } from 'react-router-dom';

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

type RegisterFormProps = {
    onSuccess: () => void;
};

export default function RegisterForm({ onSuccess }: RegisterFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<onSubmitProps>({
        resolver: yupResolver(schema),
    });
    const { registerUser } = useAuth();

    const onSubmit: SubmitHandler<onSubmitProps> = async ({ email, password }) => {
        await registerUser(email, password);
        onSuccess();
    };

    return (
        <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
            <AppPaper elevation={16}>
                <Typography variant="h3" component="h1" align="center" sx={{ mb: 3 }}>
                    Register
                </Typography>
                <Stack spacing={2}>
                    <TextField
                        label="Email"
                        focused
                        {...register('email')}
                        error={Boolean(errors?.email)}
                        helperText={errors?.email?.message}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        {...register('password')}
                        error={Boolean(errors?.password)}
                        helperText={errors?.password?.message}
                    />
                    <TextField
                        label="Confirm Password"
                        type="password"
                        {...register('confirmPassword')}
                        error={Boolean(errors?.confirmPassword)}
                        helperText={errors?.confirmPassword ? 'Confirm Password must match with Password' : null}
                    />
                    <Button type="submit" fullWidth variant="contained" size="large">
                        Register
                    </Button>
                    <Divider />
                    <Typography
                        component={Link}
                        to="/login"
                        variant="subtitle1"
                        sx={{ color: 'black', textDecoration: 'none', textAlign: 'center' }}
                    >
                        Have an account?
                    </Typography>
                </Stack>
            </AppPaper>
        </Box>
    );
}
