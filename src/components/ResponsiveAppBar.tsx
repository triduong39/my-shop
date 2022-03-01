import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import MenuAvatar from './MenuAvatar';
import { Link, useNavigate } from 'react-router-dom';

import { useMediaQuery } from '@mui/material';

const pages = [
    {
        name: 'Products',
        to: '/products',
    },
    {
        name: 'Category',
        to: '/categories',
    },
];

const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const navigate = useNavigate();
    const isWeb = useMediaQuery('(min-width:900px)');

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const renderMobile = (
        <>
            <Box sx={{ flexGrow: 1, display: 'flex' }}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                >
                    {pages.map((page) => (
                        <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">
                                <Link to={page.to} style={{ textDecoration: 'none', color: 'black', display: 'block' }}>
                                    {page.name}
                                </Link>
                            </Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>

            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: 'flex' }}>
                LOGO
            </Typography>
        </>
    );

    const renderWeb = (
        <>
            <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: 'flex' }}>
                LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: 'flex' }}>
                {pages.map((page) => (
                    <Button key={page.name} onClick={handleCloseNavMenu} sx={{ my: 2 }}>
                        <Link to={page.to} style={{ textDecoration: 'none', color: 'white', display: 'block' }}>
                            {page.name}
                        </Link>
                    </Button>
                ))}
            </Box>
        </>
    );

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {isWeb ? renderWeb : renderMobile}
                    <MenuAvatar onSuccessLogout={() => navigate('/login')} />
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;
