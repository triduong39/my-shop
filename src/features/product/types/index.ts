export type Product = {
    id: number;
    name: string;
    shortDescription: string;
    description: string;
    originalPrice: number;
    salePrice: number;
    images: string[];
    isFreeShip: false;
    categoryId: string;
};

export type ListProduct = {
    data: Product[];
    page: number;
    limit: number;
    totalRows: number;
};

export type ProductState = {
    status: 'idle' | 'loading' | 'error' | 'success';
    listProduct?: ListProduct;
    productDetail?: Product;
    error?: string;
};

export type Pagination = {
    _page: number;
    _limit: number;
};

export type ResponseListProduct = {
    data: Product[];
    pagination: {
        _page: number;
        _limit: number;
        _totalRows: number;
    };
};
