import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { getListProduct } from '../api/getListProduct';
import { listProductRoute, ResponseListProduct } from '../types';
import { fetchListProduct, fetchListProductSuccess, fetchListProductFailed } from './productSlice';

function* listProduct(action: PayloadAction<listProductRoute>) {
    try {
        const response: ResponseListProduct = yield call(getListProduct, action.payload);
        yield put(fetchListProductSuccess(response));
    } catch (error) {
        yield put(fetchListProductFailed('Failed to fetch list product'));
    }
}

export default function* listProductSaga() {
    yield takeLatest(fetchListProduct.type, listProduct);
}
