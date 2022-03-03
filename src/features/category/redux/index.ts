import { all } from 'redux-saga/effects';
import createCategorySaga from './createCategorySaga';
import deleteCategorySaga from './deleteCategorySaga';
import listCategorySaga from './listCategorySaga';
import updateCategorySaga from './updateCategorySaga';

export default function* categorySaga() {
    yield all([listCategorySaga(), createCategorySaga(), updateCategorySaga(), deleteCategorySaga()]);
}
