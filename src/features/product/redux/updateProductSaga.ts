import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { updateDataProduct } from '../api/updateDataProduct';
import { Product, UpdateProductProps } from '../types';
import { updateProduct, updateProductSuccess, updateProductFailed } from './productSlice';

function* productDetail(action: PayloadAction<UpdateProductProps>) {
    try {
        const response: Product = yield call(updateDataProduct, action.payload);
        yield put(updateProductSuccess(response));
    } catch (error) {
        yield put(updateProductFailed(`Failed to fetch product ${action.payload}`));
    }
}

export default function* updateProductSaga() {
    yield takeLatest(updateProduct.type, productDetail);
}
