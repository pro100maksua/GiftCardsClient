import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../models/cart';
import { CartItem } from '../models/cart-item';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart;
  isCart: boolean;
  title: string;

  constructor(private cartService: CartService,
    private orderService: OrderService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.router.url.indexOf('orders') > -1) {
      const id = this.route.snapshot.paramMap.get("id");

      this.orderService.get(id)
        .subscribe(data => {
          this.cart = data as Cart;

          console.log(this.cart);
        });
      this.isCart = false;
      this.title = "Order";
    }
    else {
      this.cartService.getAll("")
        .subscribe(response => {
          this.cart = response as Cart;
          console.log(this.cart);
        });

      this.isCart = true;
      this.title = "Your Shoping Cart";
    }
  }

  removeFromCart(item: CartItem) {
    item.count--;
    this.cart.total -= item.giftCard.price;

    if (item.count === 0) {
      const index = this.cart.items.indexOf(item);
      this.cart.items.splice(index, 1);
    }

    const giftCardId = item.giftCard.id;
    this.cartService.removeFromCart(giftCardId)
      .subscribe();
  }

  checkout() {
    this.orderService.create("").subscribe();
    this.router.navigate(["giftcards"]);
  }

  back() {
    this.router.navigate(["giftcards"]);
  }
}
