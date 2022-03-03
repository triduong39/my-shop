import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { history } from '../../../utils/history';
import { deleteProduct as deleteDataProduct } from '../api/deleteProduct';
import { deleteProduct, deleteProductSuccess, deleteProductFailed, fetchListProduct } from './productSlice';

function* productDelete(action: PayloadAction<string>) {
    try {
        yield call(deleteDataProduct, action.payload);
        yield put(deleteProductSuccess());
        //fetch new data
        yield put(fetchListProduct({}));
        yield call(history.push, `/products`);
    } catch (error) {
        yield put(deleteProductFailed(`Failed to fetch product ${action.payload}`));
    }
}

export default function* deleteProductSaga() {
    yield takeLatest(deleteProduct.type, productDelete);
}
