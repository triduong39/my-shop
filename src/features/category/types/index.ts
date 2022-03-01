export type Category = {
    id: string;
    name: string;
};

export type CategoryState = {
    status: 'idle' | 'loading' | 'error' | 'success';
    listCategory?: Category[];
    error?: string;
};
