import { Pagination } from './../types/index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ListProduct, ResponseListProduct, ProductState } from '../types';

const initListProduct: ListProduct = {
    data: [],
    page: 1,
    limit: 10,
    totalRows: 0,
};

// Define the initial state using that type
const initialState: ProductState = {
    status: 'idle',
    listProduct: initListProduct,
    productDetail: undefined,
    error: undefined,
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        fetchListProduct: (state, _action: PayloadAction<Pagination>) => {
            state.status = 'loading';
            state.error = undefined;
        },
        fetchListProductSuccess: (state, action: PayloadAction<ResponseListProduct>) => {
            state.status = 'success';
            state.error = undefined;

            state.listProduct = {
                data: action.payload.data,
                page: action.payload.pagination._page,
                limit: action.payload.pagination._limit,
                totalRows: action.payload.pagination._totalRows,
            };
        },
        fetchListProductFailed: (state, action: PayloadAction<string>) => {
            state.status = 'error';
            state.error = action.payload;
        },
    },
});

export const { fetchListProduct, fetchListProductSuccess, fetchListProductFailed } = productSlice.actions;

const productReducer = productSlice.reducer;
export default productReducer;
