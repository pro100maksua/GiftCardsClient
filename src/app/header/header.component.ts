import { Component, OnInit, EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { GiftCardResponse } from '../Models/giftCard';
import { GiftCardService } from '../services/gift-card.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { FetchResponse } from '../models/fetch-response';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authServise: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  search(value: string) {
    this.router.navigate(["giftcards"], { queryParams: { search: value } });
  }

  logout() {
    this.authServise.logout();
    this.router.navigate(["/"]);
  }
}