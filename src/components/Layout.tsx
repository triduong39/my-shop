import React from 'react';
import { Container, ContainerProps } from '@mui/material';

export default function Layout({ children, ...props }: ContainerProps) {
    return (
        <Container maxWidth="lg" {...props}>
            {children}
        </Container>
    );
}
