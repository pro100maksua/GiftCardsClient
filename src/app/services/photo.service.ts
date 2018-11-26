import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) {
  }

  uploadForGiftCard(giftCardId: string, photo: File) {
    const formData = new FormData();
    formData.append("file", photo);

    return this.http.post(`https://giftcardsapi.azurewebsites.net/api/giftcards/${giftCardId}/image`, formData);
  }

  uploadForCategory(giftCardId: string, photo: File) {
    const formData = new FormData();
    formData.append("file", photo);

    return this.http.post(`https://giftcardsapi.azurewebsites.net/api/categories/${giftCardId}/image`, formData);
  }
}
