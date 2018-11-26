import { CategoryResponse } from "./category";

export interface GiftCardResponse {
    id: string;
    name: string;
    description: string;
    code: string;
    price: number;
    validity: Date;
    category: CategoryResponse;
    categoryId: string;
    photoId: string;
}

export interface GiftCardRequest {
    id: string;
    name: string;
    description: string;
    code: string;
    price: number;
    validity: Date;
    categoryId: string;
}
