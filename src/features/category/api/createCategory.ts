import { axios } from '../../../app/axios';
import { API_URL } from '../../../config';
import { Category, CreateCategoryAction } from '../types';

export const createCategory = (data: CreateCategoryAction): Promise<Category> => {
    return axios.post(`${API_URL}/categories`, data);
};
