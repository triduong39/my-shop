import { Stack, Typography } from '@mui/material';
import React from 'react';

export default function NotFound() {
    return (
        <Stack alignItems="center">
            <Typography component={'h1'}>404</Typography>
            <Typography component={'h1'}>Not found</Typography>
        </Stack>
    );
}
