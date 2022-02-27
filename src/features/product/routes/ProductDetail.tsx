import React from 'react';
import { Typography } from '@mui/material';
import { useLocation, useParams } from 'react-router-dom';

export default function ProductDetail() {
    const location = useLocation();
    const { id } = useParams();
    console.log('location', location);
    console.log('params', id);

    return (
        <Typography variant="h3" component="h1" align="center" sx={{ mb: 3 }}>
            Products {id}
        </Typography>
    );
}
