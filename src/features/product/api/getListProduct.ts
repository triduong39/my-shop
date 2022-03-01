import { axios } from '../../../app/axios';
import { API_URL } from '../../../config';
import { listProductParams, Product } from '../types';

export const getListProduct = ({ categoryId, _page, _limit }: listProductParams): Promise<Product[]> => {
    if (categoryId) {
        return axios.get(`${API_URL}/categories/${categoryId}/products`, {
            params: {
                _page,
                _limit,
            },
        });
    }
    return axios.get(`${API_URL}/products`, {
        params: {
            _page,
            _limit,
        },
    });
};
