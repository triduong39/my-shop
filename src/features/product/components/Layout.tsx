import React from 'react';
import { Container } from '@mui/material';
import { styled } from '@mui/system';

const AppContainer = styled(Container)`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

type LayoutProps = {
    children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    return <AppContainer maxWidth="lg">{children}</AppContainer>;
}
