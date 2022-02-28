import { axios } from '../../../app/axios';
import { UserResponse } from '../types';

export type RegisterCredentialsDTO = {
    email: string;
    password: string;
};

export const registerWithEmailAndPassword = (data: RegisterCredentialsDTO): Promise<UserResponse> => {
    return axios.post('/auth/register', data);
};
