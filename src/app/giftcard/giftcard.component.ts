import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GiftCardService } from '../services/gift-card.service';
import { GiftCardResponse } from '../Models/giftCard';
import { CartService } from '../services/cart.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-giftcard',
  templateUrl: './giftcard.component.html',
  styleUrls: ['./giftcard.component.css']
})
export class GiftcardComponent implements OnInit {
  giftCard: GiftCardResponse;

  constructor(private route: ActivatedRoute,
    private giftCardService: GiftCardService,
    private cartService: CartService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.setGiftCard();
  }

  setGiftCard() {
    const id = this.route.snapshot.paramMap.get("id");

    this.giftCardService.get(id)
      .subscribe(response => this.giftCard = response as GiftCardResponse);
  }

  addToCart() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(["login"], { queryParams: { returnUrl: `/giftcards/${this.giftCard.id}` } });
      return;
    }

    this.cartService.addToCart(this.giftCard.id)
      .subscribe();
  }
}
