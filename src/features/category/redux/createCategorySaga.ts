import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { history } from '../../../utils/history';
import { Category, CreateCategoryAction } from '../types';
import { createCategory as createCategoryApi } from '../api/createCategory';
import { createCategory, createCategorySuccess, createCategoryFailed } from './categorySlice';

function* categoryCreate(action: PayloadAction<CreateCategoryAction>) {
    try {
        const response: Category = yield call(createCategoryApi, action.payload);
        yield put(createCategorySuccess(response));
        yield call(history.push, `/categories`);
    } catch (error) {
        yield put(createCategoryFailed(`Failed to create category`));
    }
}

export default function* createCategorySaga() {
    yield takeLatest(createCategory.type, categoryCreate);
}
