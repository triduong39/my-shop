export type AuthUser = {
    access_token: string;
};

export type UserResponse = {
    access_token: string;
};

export type AuthResponse = {
    error: boolean;
    status: number;
    message: string;
};
