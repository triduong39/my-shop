import { axios } from '../../../app/axios';
import { API_URL } from '../../../config';
import { Product } from '../types';

export const deleteProduct = (id: string): Promise<Product> => {
    return axios.delete(`${API_URL}/products/${id}`);
};
