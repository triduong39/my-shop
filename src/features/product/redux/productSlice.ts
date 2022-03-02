import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResponseListProduct, ProductState, listProductRoute, Product, UpdateProductProps } from '../types';

// Define the initial state using that type
const initialState: ProductState = {
    status: 'idle',
    listProduct: undefined,
    categoryProducts: undefined,
    productDetail: undefined,
    error: undefined,
};

const listProductReducer = {
    fetchListProduct: (state: ProductState, _action: PayloadAction<listProductRoute>) => {
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

const deleteProductsReducer = {
    deleteProduct: (state: ProductState, _action: PayloadAction<string>) => {
        state.status = 'loading';
        state.error = undefined;
    },
    deleteProductSuccess: (state: ProductState) => {
        state.status = 'success';
        state.error = undefined;
    },
    deleteProductFailed: (state: ProductState, action: PayloadAction<string>) => {
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
        ...updateProductsReducer,
        ...deleteProductsReducer,
    },
});

export const {
    fetchListProduct,
    fetchListProductSuccess,
    fetchListProductFailed,

    fetchListProductDetail,
    fetchListProductDetailSuccess,
    fetchListProductDetailFailed,

    updateProduct,
    updateProductSuccess,
    updateProductFailed,

    deleteProduct,
    deleteProductSuccess,
    deleteProductFailed,
} = productSlice.actions;

const productReducer = productSlice.reducer;
export default productReducer;
