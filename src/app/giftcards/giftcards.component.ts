import { Component, OnInit } from '@angular/core';
import { GiftCardResponse } from '../Models/giftCard';
import { GiftCardService } from '../services/gift-card.service';
import { PaginationInstance } from 'ngx-pagination';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FetchResponse } from '../models/fetch-response';
import { CategoryService } from '../services/category.service';
import { CategoryResponse } from '../Models/category';

@Component({
  selector: 'app-giftcards',
  templateUrl: './giftcards.component.html',
  styleUrls: ['./giftcards.component.css']
})
export class GiftcardsComponent implements OnInit {
  giftCards: GiftCardResponse[];
  config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 12,
    currentPage: 1
  };
  isAdmin: boolean;
  title = "Gift Cards";

  constructor(private giftCardService: GiftCardService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService) {
  }

  ngOnInit() {
    if (this.router.url.indexOf('categories') > -1) {
      const id = this.route.snapshot.paramMap.get("id");

      this.categoryService.get(id)
        .subscribe(data => {
          const category = data as CategoryResponse;
          this.giftCards = category.giftCards;
          this.title = category.name;
        });
    }
    else {
      this.route.queryParamMap.subscribe(query => {
        const search = query.get("search");

        this.giftCardService.getAll(search || "")
          .subscribe(data => {
            this.giftCards = (data as FetchResponse<GiftCardResponse>).items;
          });
      });
    }
    this.isAdmin = this.authService.isAdmin();
  }
}