import { axios } from '../../../app/axios';
import { API_URL } from '../../../config';
import { AuthResponse } from '../types';

export const verifyToken = (token: string): Promise<AuthResponse> => {
    return axios.post(`${API_URL}/api/auth/verify-token`, { access_token: token });
};
