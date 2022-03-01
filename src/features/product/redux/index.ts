import { all } from 'redux-saga/effects';
import categoryProductsSaga from './categoryProductsSaga';
import deleteProductSaga from './deleteProductSaga';
import listProductSaga from './listProductSaga';
import productDetailSaga from './productDetailSaga';
import updateProductSaga from './updateProductSaga';

export default function* productSaga() {
    yield all([
        listProductSaga(),
        productDetailSaga(),
        categoryProductsSaga(),
        updateProductSaga(),
        deleteProductSaga(),
    ]);
}
