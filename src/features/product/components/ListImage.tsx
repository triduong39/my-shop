import React from 'react';
import { Stack } from '@mui/material';
import { styled } from '@mui/system';

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

    &.img-big {
        width: 75px;
        height: 75px;
    }

    &.img-no-hover {
        border: 1px solid #00000000;
        transform: scale(1);
        cursor: unset;
    }
`;

type ListImageProps = {
    size?: 'md' | 'lg';
    hover?: boolean;
    images: string[];
    imageSelected?: number;
    handleItemClick?: (index: number) => void;
};

export default function ListImage({
    size = 'md',
    hover = true,
    images = [],
    imageSelected,
    handleItemClick,
}: ListImageProps) {
    const getClass = (index: number) => {
        return [
            size === 'lg' ? 'img-big' : '',
            !hover ? 'img-no-hover' : '',
            imageSelected === index ? 'selected' : '',
        ].join(' ');
    };
    return (
        <Stack direction="row" spacing={1} justifyContent="center">
            {images.map((image, index) => (
                <AppImgSmall
                    key={index}
                    src={image}
                    className={getClass(index)}
                    alt={`image-${index}`}
                    onClick={() => {
                        handleItemClick && handleItemClick(index);
                    }}
                />
            ))}
        </Stack>
    );
}
