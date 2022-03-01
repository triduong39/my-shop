import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    ResponseListProduct,
    ProductState,
    CategoryProductsPagination,
    Pagination,
    Product,
    UpdateProductProps,
} from '../types';

// Define the initial state using that type
const initialState: ProductState = {
    status: 'idle',
    listProduct: undefined,
    categoryProducts: undefined,
    productDetail: undefined,
    error: undefined,
};

const listProductReducer = {
    fetchListProduct: (state: ProductState, _action: PayloadAction<Pagination>) => {
        state.status = 'loading';
        state.error = undefined;
    },
    fetchListProductSuccess: (state: ProductState, action: PayloadAction<ResponseListProduct>) => {
        state.status = 'success';
        state.error = undefined;

        state.listProduct = {
            data: action.payload.data,
            page: action.payload.pagination._page,
            limit: action.payload.pagination._limit,
            totalRows: action.payload.pagination._totalRows,
        };
    },
    fetchListProductFailed: (state: ProductState, action: PayloadAction<string>) => {
        state.status = 'error';
        state.error = action.payload;
    },
};

const productDetailReducer = {
    fetchListProductDetail: (state: ProductState, _action: PayloadAction<string>) => {
        state.status = 'loading';
        state.error = undefined;
    },
    fetchListProductDetailSuccess: (state: ProductState, action: PayloadAction<Product>) => {
        state.status = 'success';
        state.error = undefined;

        state.productDetail = action.payload;
    },
    fetchListProductDetailFailed: (state: ProductState, action: PayloadAction<string>) => {
        state.status = 'error';
        state.error = action.payload;
    },
};

const categoryProductsReducer = {
    fetchCategoryProducts: (state: ProductState, _action: PayloadAction<CategoryProductsPagination>) => {
        state.status = 'loading';
        state.error = undefined;
    },
    fetchCategoryProductsSuccess: (state: ProductState, action: PayloadAction<ResponseListProduct>) => {
        state.status = 'success';
        state.error = undefined;

        state.categoryProducts = {
            data: action.payload.data,
            page: action.payload.pagination._page,
            limit: action.payload.pagination._limit,
            totalRows: action.payload.pagination._totalRows,
        };
    },
    fetchCategoryProductsFailed: (state: ProductState, action: PayloadAction<string>) => {
        state.status = 'error';
        state.error = action.payload;
    },
};

const updateProductsReducer = {
    updateProduct: (state: ProductState, _action: PayloadAction<UpdateProductProps>) => {
        state.status = 'loading';
        state.error = undefined;
    },
    updateProductSuccess: (state: ProductState, _action: PayloadAction<Product>) => {
        state.status = 'success';
        state.error = undefined;
    },
    updateProductFailed: (state: ProductState, action: PayloadAction<string>) => {
        state.status = 'error';
        state.error = action.payload;
    },
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        ...listProductReducer,
        ...productDetailReducer,
        ...categoryProductsReducer,
        ...updateProductsReducer,
    },
});

export const {
    fetchListProduct,
    fetchListProductSuccess,
    fetchListProductFailed,

    fetchListProductDetail,
    fetchListProductDetailSuccess,
    fetchListProductDetailFailed,

    fetchCategoryProducts,
    fetchCategoryProductsSuccess,
    fetchCategoryProductsFailed,

    updateProduct,
    updateProductSuccess,
    updateProductFailed,
} = productSlice.actions;

const productReducer = productSlice.reducer;
export default productReducer;
