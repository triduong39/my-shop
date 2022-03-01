import React, { useState } from 'react';
import { Stack } from '@mui/material';
import { styled } from '@mui/system';

const AppImgBig = styled('img')`
    width: 350px;
    height: 350px;
    object-fit: cover;
`;
const AppImgSmall = styled('img')`
    width: 35px;
    height: 35px;
    object-fit: cover;
    border-radius: 25%;
    cursor: pointer;
    border: 1px solid #00000000;
    transition: transform 0.3s;
    &.selected,
    :hover {
        border: 1px solid #fd4646bd;
        transform: scale(1.4);
    }
`;

type ListImageProps = {
    images: string[];
};

export default function ListImage({ images }: ListImageProps) {
    const [imageSelected, setImageSelected] = useState(0);

    return (
        <Stack spacing={3} alignItems="center">
            <AppImgBig src={images[imageSelected]} alt="123" />
            <Stack direction="row" spacing={1}>
                {images.map((image, index) => (
                    <AppImgSmall
                        key={index}
                        src={image}
                        className={imageSelected === index ? 'selected' : ''}
                        alt="123"
                        onClick={() => setImageSelected(index)}
                    />
                ))}
            </Stack>
        </Stack>
    );
}
