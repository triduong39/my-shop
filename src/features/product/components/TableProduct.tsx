import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton, Stack, Typography } from '@mui/material';
import { styled } from '@mui/system';

import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import VisibilityIcon from '@mui/icons-material/Visibility';

import { Product } from '../types';
import { Link } from 'react-router-dom';

const AppTypography = styled(Typography)`
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
`;

const AppImg = styled('img')`
    width: 50px;
    height: 50px;
    object-fit: cover;
`;

type TableProductProps = {
    rows: Product[];
};

export default function TableProduct({ rows }: TableProductProps) {
    return (
        <TableContainer component={Paper} elevation={8}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left" width={200}>
                            Product name
                        </TableCell>
                        <TableCell align="center">Image</TableCell>
                        <TableCell align="left">Short Description</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="center">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="left">
                                <AppImg src={row.images[0]} alt={row.name} />
                            </TableCell>
                            <TableCell align="left">
                                <AppTypography variant="body2">{row.shortDescription}</AppTypography>
                            </TableCell>
                            <TableCell align="right">{row.salePrice}</TableCell>
                            <TableCell align="left">
                                <Stack direction="row" spacing={2}>
                                    <Link to={`/products/${row.id}`}>
                                        <IconButton aria-label="create" color="success">
                                            <VisibilityIcon />
                                        </IconButton>
                                    </Link>
                                    <Link to={`/products/edit/${row.id}`}>
                                        <IconButton aria-label="create" color="success">
                                            <CreateIcon />
                                        </IconButton>
                                    </Link>
                                    <Link to={`/products/delete/${row.id}`}>
                                        <IconButton aria-label="delete" color="error">
                                            <DeleteIcon />
                                        </IconButton>
                                    </Link>
                                </Stack>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
