import React from 'react';
import { Button, Stack } from '@mui/material';
import { Category } from '../types';

type ListCategoryProps = {
    categories: Category[];
    handleItemClick: (categoryId: string) => void;
};

export default function ListCategory({ categories, handleItemClick }: ListCategoryProps) {
    return (
        <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
            {categories.map((category) => (
                <Button key={category.name} variant="contained" onClick={() => handleItemClick(category.id)}>
                    {category.name}
                </Button>
            ))}
        </Stack>
    );
}
