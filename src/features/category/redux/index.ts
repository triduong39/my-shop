import { all } from 'redux-saga/effects';
import createCategorySaga from './createCategorySaga';
import listCategorySaga from './listCategorySaga';

export default function* categorySaga() {
    yield all([listCategorySaga(), createCategorySaga()]);
}
