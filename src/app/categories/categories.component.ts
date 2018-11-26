import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { PaginationInstance } from 'ngx-pagination';
import { CategoryResponse } from '../Models/category';
import { FetchResponse } from '../models/fetch-response';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: CategoryResponse[];
  config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 9,
    currentPage: 1
  };
  isAdmin: boolean;

  constructor(private categoryService: CategoryService,
    private route: ActivatedRoute,
    private authService: AuthService) {
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(query => {
      const search = query.get("search");

      this.categoryService.getAll(search || "")
        .subscribe(data => {
          this.categories = (data as FetchResponse<CategoryResponse>).items;
        });
    });

    this.isAdmin = this.authService.isAdmin();
  }
}