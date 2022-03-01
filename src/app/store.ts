import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import categoryReducer from '../features/category/redux/categorySlice';
import productReducer from '../features/product/redux/productSlice';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        product: productReducer,
        category: categoryReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
