import { all } from 'redux-saga/effects';
import createCategorySaga from './createCategorySaga';
import listCategorySaga from './listCategorySaga';
import updateCategorySaga from './updateCategorySaga';

export default function* categorySaga() {
    yield all([listCategorySaga(), createCategorySaga(), updateCategorySaga()]);
}
