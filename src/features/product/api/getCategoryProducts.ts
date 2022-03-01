import { axios } from '../../../app/axios';
import { API_URL } from '../../../config';
import { Pagination, Product } from '../types';

export const getCategoryProducts = (categoryId: string, params: Pagination): Promise<Product> => {
    return axios.get(`${API_URL}/categories/${categoryId}/products`, { params: params });
};
