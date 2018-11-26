import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryResponse } from '../Models/category';
import { GiftCardService } from '../services/gift-card.service';
import { CategoryService } from '../services/category.service';
import { PhotoService } from '../services/photo.service';
import { Router } from '@angular/router';
import { GiftCardResponse } from '../Models/giftCard';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  form: FormGroup;
  description = new FormControl();
  categories: CategoryResponse[];
  imagePreview;
  image: File;

  constructor(fb: FormBuilder,
    private categoryService: CategoryService,
    private photoService: PhotoService,
    private router: Router) {
    this.form = fb.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  previewImage(input) {
    this.image = input.files[0];

    const reader = new FileReader();
    reader.onload = e => this.imagePreview = reader.result;

    reader.readAsDataURL(this.image);
  }

  submit() {
    let category = this.form.value;
    category.description = this.description.value;

    this.categoryService.create(category)
      .subscribe(response => {
        const id = (response as CategoryResponse).id;

        this.uploadPhoto(id)
        this.router.navigateByUrl(`/giftcards/${id}`);
      });
  }

  uploadPhoto(categoryId) {
    if (this.image) {
      this.photoService.uploadForCategory(categoryId, this.image)
        .subscribe();
    }
  }
}
