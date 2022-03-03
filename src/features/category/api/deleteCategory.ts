import { axios } from '../../../app/axios';
import { API_URL } from '../../../config';
import { Category } from '../types';

export const deleteCategory = (id: string): Promise<Category> => {
    return axios.delete(`${API_URL}/categories/${id}`);
};
