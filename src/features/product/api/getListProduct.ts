import { axios } from '../../../app/axios';
import { API_URL } from '../../../config';
import { Pagination, Product } from '../types';

export const getListProduct = (params: Pagination): Promise<Product[]> => {
    return axios.get(`${API_URL}/products`, { params: params });
};
