import { STORAGE_TOKEN } from '../config';

const storage = {
    getToken: () => {
        return JSON.parse(window.localStorage.getItem(STORAGE_TOKEN) as string);
    },
    setToken: (token: string) => {
        window.localStorage.setItem(STORAGE_TOKEN, JSON.stringify(token));
    },
    clearToken: () => {
        window.localStorage.removeItem(STORAGE_TOKEN);
    },
};

export default storage;
