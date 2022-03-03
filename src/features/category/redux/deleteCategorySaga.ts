import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { history } from '../../../utils/history';
import { deleteCategory as deleteCategoryApi } from '../api/deleteCategory';
import { Category } from '../types';
import { deleteCategory, deleteCategorySuccess, deleteCategoryFailed, fetchListCategory } from './categorySlice';

function* categoryDelete(action: PayloadAction<string>) {
    try {
        const response: Category = yield call(deleteCategoryApi, action.payload);
        yield put(deleteCategorySuccess(response));
        // fetch new data
        yield put(fetchListCategory());
        yield call(history.push, `/categories`);
    } catch (error) {
        yield put(deleteCategoryFailed(`Failed to delete category`));
    }
}

export default function* deleteCategorySaga() {
    yield takeLatest(deleteCategory.type, categoryDelete);
}
