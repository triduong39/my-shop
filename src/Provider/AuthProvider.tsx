import React from 'react';
import { STORAGE_TOKEN } from '../config';
import { loginWithEmailAndPassword } from '../features/auth/api/login';
import { registerWithEmailAndPassword } from '../features/auth/api/register';
import { UserResponse } from '../features/auth/types';
import { useLocalStorage } from '../hooks/useLocalStorage';
import storage from '../utils/storage';

type AuthProviderProps = {
    children: React.ReactNode;
};

type authContextProps = {
    currentUser: string;
    signIn: (userName: string, password: string) => void;
    signOut: () => void;
    registerUser: (userName: string, password: string) => void;
    isLogged: boolean;
    error: string;
};

const AuthContext = React.createContext<authContextProps | null>(null);

export function useAuth() {
    const context = React.useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used in AuthProvider component');
    }
    return context;
}

// example state: { userName: 'tri', password: '123' }
async function handleUserResponse({ access_token }: UserResponse) {
    storage.setToken(access_token);
}

export default function AuthProvider({ children }: AuthProviderProps) {
    const [currentUser, setCurrentUser] = useLocalStorage<string>(STORAGE_TOKEN, '');
    const [error, setError] = React.useState('');

    async function signIn(email: string, password: string) {
        setError('');
        const response = await loginWithEmailAndPassword({ email, password });
        handleUserResponse(response);
        setCurrentUser(response.access_token);
    }

    async function registerUser(email: string, password: string) {
        setError('');
        const response = await registerWithEmailAndPassword({ email, password });
        console.log(response);

        handleUserResponse(response);
        setCurrentUser(response.access_token);
    }

    function signOut() {
        setError('');
        setCurrentUser('');
    }

    const value = {
        currentUser,
        signIn,
        signOut,
        registerUser,
        isLogged: Boolean(currentUser),
        error,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
