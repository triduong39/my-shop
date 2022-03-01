import { axios } from '../../../app/axios';
import { API_URL } from '../../../config';
import { Product, UpdateProductProps } from '../types';

export const updateDataProduct = (data: UpdateProductProps): Promise<Product> => {
    return axios.patch(`${API_URL}/products/${data.id}`, data);
};
