import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { getProductDetail } from '../api/getProductDetail';
import { Product } from '../types';
import { fetchListProductDetail, fetchListProductDetailSuccess, fetchListProductDetailFailed } from './productSlice';

function* productDetail(action: PayloadAction<string>) {
    try {
        const response: Product = yield call(getProductDetail, action.payload);
        yield put(fetchListProductDetailSuccess(response));
    } catch (error) {
        yield put(fetchListProductDetailFailed(`Failed to fetch product ${action.payload}`));
    }
}

export default function* productDetailSaga() {
    yield takeLatest(fetchListProductDetail.type, productDetail);
}
