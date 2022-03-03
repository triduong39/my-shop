import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { history } from '../../../utils/history';
import { createProduct as createDataProduct } from '../api/createProduct';
import { Product, CreateProductProps } from '../types';
import { createProduct, createProductSuccess, createProductFailed } from './productSlice';

function* productCreate(action: PayloadAction<CreateProductProps>) {
    try {
        const response: Product = yield call(createDataProduct, action.payload);
        yield put(createProductSuccess(response));
        yield call(history.push, `/products`);
    } catch (error) {
        yield put(createProductFailed(`Failed to create product`));
    }
}

export default function* createProductSaga() {
    yield takeLatest(createProduct.type, productCreate);
}
