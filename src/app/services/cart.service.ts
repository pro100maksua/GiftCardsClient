import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CartService extends DataService {

  constructor(http: HttpClient) {
    super("https://giftcardsapi.azurewebsites.net/api/cart", http);
  }

  addToCart(productId: string) {
    return this.http.put("https://giftcardsapi.azurewebsites.net/api/cart/add", "", { params: { productId: productId } });
  }

  removeFromCart(productId: string) {
    return this.http.put("https://giftcardsapi.azurewebsites.net/api/cart/remove", "", { params: { productId: productId } });
  }
}
