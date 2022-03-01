import { all } from 'redux-saga/effects';
import listCategorySaga from './listCategorySaga';

export default function* categorySaga() {
    yield all([listCategorySaga()]);
}
