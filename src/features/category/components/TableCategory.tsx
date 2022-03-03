import React from 'react';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Stack } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Link } from 'react-router-dom';
import AppDialog from '../../product/components/AppDialog';
import { Category } from '../types';

type TableCategoryProps = {
    rows: Category[];
    handleDeleteCategory: (id: string) => void;
};

export default function TableCategory({ rows, handleDeleteCategory }: TableCategoryProps) {
    return (
        <TableContainer component={Paper} elevation={8}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Id</TableCell>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="center">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell align="left">{row.name}</TableCell>
                            <TableCell align="center">
                                <Stack direction="row" spacing={2} justifyContent="center">
                                    <Link to={`edit/${row.id}`}>
                                        <IconButton aria-label="create" color="success">
                                            <CreateIcon />
                                        </IconButton>
                                    </Link>
                                    <AppDialog
                                        title="Delete product"
                                        content="Are you sure to delete this product?"
                                        handleSubmit={() => handleDeleteCategory(row.id)}
                                        itemOpenDialog={
                                            <IconButton aria-label="delete" color="error">
                                                <DeleteIcon />
                                            </IconButton>
                                        }
                                    />
                                </Stack>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
