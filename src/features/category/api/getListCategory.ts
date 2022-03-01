import { axios } from '../../../app/axios';
import { API_URL } from '../../../config';
import { Category } from '../types';

export const getListCategory = (): Promise<Category[]> => {
    return axios.get(`${API_URL}/categories`);
};
