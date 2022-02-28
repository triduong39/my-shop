import { all } from 'redux-saga/effects';
import productSaga from '../features/product/redux/productSaga';

export default function* rootSaga() {
    yield all([productSaga()]);
}
