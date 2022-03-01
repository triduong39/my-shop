import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { deleteProduct as deleteDataProduct } from '../api/deleteProduct';
import { deleteProduct, deleteProductSuccess, deleteProductFailed } from './productSlice';

function* productDelete(action: PayloadAction<string>) {
    try {
        yield call(deleteDataProduct, action.payload);
        yield put(deleteProductSuccess());
    } catch (error) {
        yield put(deleteProductFailed(`Failed to fetch product ${action.payload}`));
    }
}

export default function* deleteProductSaga() {
    yield takeLatest(deleteProduct.type, productDelete);
}
