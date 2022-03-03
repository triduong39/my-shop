import { axios } from '../../../app/axios';
import { API_URL } from '../../../config';
import { Category, UpdateCategoryAction } from '../types';

export const updateCategory = (data: UpdateCategoryAction): Promise<Category> => {
    return axios.patch(`${API_URL}/categories/${data.id}`, { name: data.name });
};
