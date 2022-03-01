import { axios } from '../../../app/axios';
import { API_URL } from '../../../config';
import { Product } from '../types';

export const getProductDetail = (productId: string): Promise<Product> => {
    return axios.get(`${API_URL}/products/${productId}`);
};
