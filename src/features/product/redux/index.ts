import { all } from 'redux-saga/effects';
import categoryProductsSaga from './categoryProductsSaga';
import listProductSaga from './listProductSaga';
import productDetailSaga from './productDetailSaga';

export default function* productSaga() {
    yield all([listProductSaga(), productDetailSaga(), categoryProductsSaga()]);
}
