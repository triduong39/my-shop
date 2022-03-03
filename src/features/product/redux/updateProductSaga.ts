import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { history } from '../../../utils/history';
import { updateProduct as updateDataProduct } from '../api/updateProduct';
import { Product, UpdateProductProps } from '../types';
import { updateProduct, updateProductSuccess, updateProductFailed } from './productSlice';

function* productUpdate(action: PayloadAction<UpdateProductProps>) {
    try {
        const response: Product = yield call(updateDataProduct, action.payload);
        yield put(updateProductSuccess(response));
        yield call(history.push, `/products/${response.id}`);
    } catch (error) {
        yield put(updateProductFailed(`Failed to update product`));
    }
}

export default function* updateProductSaga() {
    yield takeLatest(updateProduct.type, productUpdate);
}
