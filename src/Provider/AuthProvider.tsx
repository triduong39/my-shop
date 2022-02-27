import React from 'react';
import { AuthUser } from '../features/auth/types';

type AuthProviderProps = {
    children: React.ReactNode;
};

type authContextProps = {
    currentUser: AuthUser | null;
    signIn: (userName: string, password: string) => void;
    signOut: () => void;
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

export default function AuthProvider({ children }: AuthProviderProps) {
    const [currentUser, setCurrentUser] = React.useState<AuthUser | null>(null);
    const [error, setError] = React.useState('');

    function signIn(userName: string, password: string) {
        setError('');
        setCurrentUser({ userName: userName, password: password });
    }

    function signOut() {
        setError('');
        setCurrentUser(null);
    }

    const value = {
        currentUser,
        signIn,
        signOut,
        isLogged: Boolean(currentUser),
        error,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
