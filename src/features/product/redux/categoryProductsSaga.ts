import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { getCategoryProducts } from '../api/getCategoryProducts';
import { CategoryProductsPagination, ResponseListProduct } from '../types';
import { fetchCategoryProducts, fetchCategoryProductsSuccess, fetchCategoryProductsFailed } from './productSlice';

function* categoryProducts(action: PayloadAction<CategoryProductsPagination>) {
    try {
        const params = {
            _page: action.payload._page,
            _limit: action.payload._limit,
        };
        const response: ResponseListProduct = yield call(getCategoryProducts, action.payload.categoryId, params);
        yield put(fetchCategoryProductsSuccess(response));
    } catch (error) {
        yield put(fetchCategoryProductsFailed(`Failed to fetch category ${action.payload}`));
    }
}

export default function* categoryProductsSaga() {
    yield takeLatest(fetchCategoryProducts.type, categoryProducts);
}
