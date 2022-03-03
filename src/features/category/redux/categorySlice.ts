import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Category, CategoryState, CreateCategoryAction, UpdateCategoryAction } from '../types';

// Define the initial state using that type
const initialState: CategoryState = {
    status: 'idle',
    listCategory: undefined,
    error: undefined,
};

const listCategoryReducer = {
    fetchListCategory: (state: CategoryState) => {
        state.status = 'loading';
        state.error = undefined;
    },
    fetchListCategorySuccess: (state: CategoryState, action: PayloadAction<Category[]>) => {
        state.status = 'success';
        state.error = undefined;

        state.listCategory = action.payload;
    },
    fetchListCategoryFailed: (state: CategoryState, action: PayloadAction<string>) => {
        state.status = 'error';
        state.error = action.payload;
    },
};

const createCategoryReducer = {
    createCategory: (state: CategoryState, _action: PayloadAction<CreateCategoryAction>) => {
        state.status = 'loading';
        state.error = undefined;
    },
    createCategorySuccess: (state: CategoryState, _action: PayloadAction<Category>) => {
        state.status = 'success';
        state.error = undefined;
    },
    createCategoryFailed: (state: CategoryState, action: PayloadAction<string>) => {
        state.status = 'error';
        state.error = action.payload;
    },
};

const updateCategoryReducer = {
    updateCategory: (state: CategoryState, _action: PayloadAction<UpdateCategoryAction>) => {
        state.status = 'loading';
        state.error = undefined;
    },
    updateCategorySuccess: (state: CategoryState, _action: PayloadAction<Category>) => {
        state.status = 'success';
        state.error = undefined;
    },
    updateCategoryFailed: (state: CategoryState, action: PayloadAction<string>) => {
        state.status = 'error';
        state.error = action.payload;
    },
};

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        ...listCategoryReducer,
        ...createCategoryReducer,
        ...updateCategoryReducer,
    },
});

export const {
    fetchListCategory,
    fetchListCategorySuccess,
    fetchListCategoryFailed,

    createCategory,
    createCategorySuccess,
    createCategoryFailed,

    updateCategory,
    updateCategorySuccess,
    updateCategoryFailed,
} = categorySlice.actions;

const categoryReducer = categorySlice.reducer;
export default categoryReducer;
