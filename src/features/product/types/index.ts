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

export type Category = {
    id: string;
    name: string;
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
    categoryProducts?: ListProduct;
    productDetail?: Product;
    error?: string;
};

export type listProductParams = {
    categoryId: string;
    _page: number;
    _limit: number;
};

export type listProductRoute = {
    category?: string;
    _page?: string;
    _limit?: string;
};

export type CategoryProductsPagination = {
    categoryId: string;
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

export type UpdateProductProps = {
    id?: number;
    name?: string;
    shortDescription?: string;
    description?: string;
    originalPrice?: number;
    salePrice?: number;
    images?: string[];
    isFreeShip?: false;
    categoryId?: string;
};
