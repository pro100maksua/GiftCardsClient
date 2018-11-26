import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class GiftCardService extends DataService {

  constructor(http: HttpClient) {
    super("https://giftcardsapi.azurewebsites.net/api/giftcards", http);
  }
}