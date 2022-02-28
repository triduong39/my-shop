import { axios } from '../../../app/axios';
import { UserResponse } from '../types';

export type registerWithEmailAndPasswordProps = {
    email: string;
    password: string;
};

export const registerWithEmailAndPassword = (data: registerWithEmailAndPasswordProps): Promise<UserResponse> => {
    return axios.post('/auth/register', data);
};
