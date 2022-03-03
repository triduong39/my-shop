import { axios } from '../../../app/axios';
import { API_URL } from '../../../config';
import { Product, CreateProductProps } from '../types';

export const createProduct = (data: CreateProductProps): Promise<Product> => {
    return axios.post(`${API_URL}/products`, data);
};
