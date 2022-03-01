import { all } from 'redux-saga/effects';
import categorySaga from '../features/category/redux';
import productSaga from '../features/product/redux';

export default function* rootSaga() {
    yield all([productSaga(), categorySaga()]);
}
