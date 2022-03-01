import { call, put, takeLatest } from 'redux-saga/effects';
import { getListCategory } from '../api/getListCategory';
import { Category } from '../types';
import { fetchListCategory, fetchListCategoryFailed, fetchListCategorySuccess } from './categorySlice';

function* listCategory() {
    try {
        const response: Category[] = yield call(getListCategory);

        yield put(fetchListCategorySuccess(response));
    } catch (error) {
        yield put(fetchListCategoryFailed('Failed to fetch list Category'));
    }
}

export default function* listCategorySaga() {
    yield takeLatest(fetchListCategory.type, listCategory);
}
