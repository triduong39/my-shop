import { DEFAULT_FETCH_PAGE, DEFAULT_FETCH_LIMIT } from './../../../config/index';
import { axios } from '../../../app/axios';
import { API_URL } from '../../../config';
import { listProductRoute, Product } from '../types';

export const getListProduct = ({ categoryId, _page, _limit }: listProductRoute): Promise<Product[]> => {
    const params = {
        _page: _page || DEFAULT_FETCH_PAGE,
        _limit: _limit || DEFAULT_FETCH_LIMIT,
    };
    if (categoryId) {
        return axios.get(`${API_URL}/categories/${categoryId}/products`, {
            params: params,
        });
    }
    return axios.get(`${API_URL}/products`, {
        params: params,
    });
};
