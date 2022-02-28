import { axios } from '../../../app/axios';
import { API_URL } from '../../../config';
import { UserResponse } from '../types';

export type loginWithEmailAndPasswordProps = {
    email: string;
    password: string;
};

export const loginWithEmailAndPassword = (data: loginWithEmailAndPasswordProps): Promise<UserResponse> => {
    return axios.post(`${API_URL}/auth/login`, data);
};
