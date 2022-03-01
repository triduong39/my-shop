import { axios } from '../../../app/axios';
import { API_URL } from '../../../config';
import { Product, UpdateProductProps } from '../types';

export const updateProduct = (data: UpdateProductProps): Promise<Product> => {
    return axios.patch(`${API_URL}/products/${data.id}`, data);
};
