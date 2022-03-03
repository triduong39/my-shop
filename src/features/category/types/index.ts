export type Category = {
    id: string;
    name: string;
};

export type CategoryState = {
    status: 'idle' | 'loading' | 'error' | 'success';
    listCategory?: Category[];
    error?: string;
};

export type SubmitCategoryFormType = {
    name: string;
};

export type UpdateCategoryAction = {
    id?: string;
} & CategoryFormType;

export type CreateCategoryAction = CategoryFormType;

export type CategoryFormType = {
    name?: string;
};
