import React, { useEffect, useState } from 'react';
import { loginWithEmailAndPassword } from '../features/auth/api/login';
import { registerWithEmailAndPassword } from '../features/auth/api/register';
import { verifyToken } from '../features/auth/api/verifyToken';
import { AuthResponse, UserResponse } from '../features/auth/types';
import storage from '../utils/storage';

type AuthProviderProps = {
    children: React.ReactNode;
};

type authContextProps = {
    signIn: (userName: string, password: string) => void;
    signOut: () => void;
    registerUser: (userName: string, password: string) => void;
    isLogged: boolean;
    loading: boolean;
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
    const [isLogged, setIsLogged] = useState(false);
    const [error, setError] = React.useState('');
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        const verifyTokenEffect = async () => {
            try {
                const token = storage.getToken();
                if (token) {
                    const response: AuthResponse = await verifyToken(token);
                    if (response.error) {
                        setError(response.message);
                        setIsLogged(false);
                    } else {
                        setIsLogged(true);
                    }
                }
            } catch (e) {
                setError('Something wrong!');
            }
            setLoading(false);
        };
        verifyTokenEffect();
    }, []);

    async function signIn(email: string, password: string) {
        setError('');
        const response = await loginWithEmailAndPassword({ email, password });

        handleUserResponse(response);
        setIsLogged(true);
    }

    async function registerUser(email: string, password: string) {
        setError('');
        const response = await registerWithEmailAndPassword({ email, password });

        handleUserResponse(response);
        setIsLogged(true);
    }

    function signOut() {
        setError('');
        setIsLogged(false);
        storage.setToken('');
    }

    const value = {
        signIn,
        signOut,
        registerUser,
        isLogged,
        loading,
        error,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
