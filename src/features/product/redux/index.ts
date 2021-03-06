import { all } from 'redux-saga/effects';
import createProductSaga from './createProductSaga';
import deleteProductSaga from './deleteProductSaga';
import listProductSaga from './listProductSaga';
import productDetailSaga from './productDetailSaga';
import updateProductSaga from './updateProductSaga';

export default function* productSaga() {
    yield all([listProductSaga(), productDetailSaga(), updateProductSaga(), deleteProductSaga(), createProductSaga()]);
}
