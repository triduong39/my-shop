import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { history } from '../../../utils/history';
import { updateCategory as updateCategoryApi } from '../api/updateCategory';
import { Category, UpdateCategoryAction } from '../types';
import { updateCategory, updateCategoryFailed, updateCategorySuccess } from './categorySlice';

function* categoryUpdate(action: PayloadAction<UpdateCategoryAction>) {
    try {
        const response: Category = yield call(updateCategoryApi, action.payload);
        yield put(updateCategorySuccess(response));
        yield call(history.push, `/categories`);
    } catch (error) {
        yield put(updateCategoryFailed(`Failed to update category`));
    }
}

export default function* updateCategorySaga() {
    yield takeLatest(updateCategory.type, categoryUpdate);
}
