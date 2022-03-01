import React, { useState } from 'react';
import { Stack } from '@mui/material';
import { styled } from '@mui/system';
import ListImage from './ListImage';

const AppImgBig = styled('img')`
    width: 350px;
    height: 350px;
    object-fit: cover;
`;

type ProductImagesProps = {
    images: string[];
};

export default function ProductImages({ images }: ProductImagesProps) {
    const [imageSelected, setImageSelected] = useState(0);

    return (
        <Stack spacing={3} alignItems="center">
            <AppImgBig src={images[imageSelected]} alt="product-image" />
            <ListImage
                images={images}
                imageSelected={imageSelected}
                handleItemClick={(index) => setImageSelected(index)}
            />
        </Stack>
    );
}
