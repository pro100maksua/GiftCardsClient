import { GiftCardResponse } from "./giftCard";

  export interface CategoryRequest {
  name: string;
  description: string;
  }

  export interface CategoryResponse {
  id: string;
  name: string;
  description: string;
  photoId: string;
  giftCards: GiftCardResponse[];
}