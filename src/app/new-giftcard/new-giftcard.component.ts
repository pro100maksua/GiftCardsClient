import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { GiftCardService } from '../services/gift-card.service';
import { GiftCardResponse } from '../Models/giftCard';
import { Router } from '@angular/router';
import { CategoryResponse } from '../Models/category';
import { CategoryService } from '../services/category.service';
import { PhotoService } from '../services/photo.service';
import { FetchResponse } from '../models/fetch-response';
export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-new-giftcard',
  templateUrl: './new-giftcard.component.html',
  styleUrls: ['./new-giftcard.component.css']
})
export class NewGiftcardComponent implements OnInit {
  form: FormGroup;
  description = new FormControl();
  categories: CategoryResponse[];
  imagePreview;
  image: File;

  constructor(fb: FormBuilder,
    private giftCardService: GiftCardService,
    private categoryService: CategoryService,
    private photoService: PhotoService,
    private router: Router) {
    this.form = fb.group({
      name: ['', Validators.required],
      code: ['', Validators.required],
      price: ['', Validators.required],
      validity: ['', Validators.required],
      categoryId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getAll("")
      .subscribe(response => this.categories = (response as FetchResponse<CategoryResponse>).items);
  }

  previewImage(input) {
    this.image = input.files[0];

    const reader = new FileReader();
    reader.onload = e => this.imagePreview = reader.result;

    reader.readAsDataURL(this.image);
  }

  submit() {
    let giftCard = this.form.value;
    giftCard.description = this.description.value;

    console.log(giftCard);
    this.giftCardService.create(giftCard)
      .subscribe(response => {
        const id = (response as GiftCardResponse).id;

        this.uploadPhoto(id)
        this.router.navigateByUrl(`/giftcards/${id}`);
      });
  }

  uploadPhoto(giftCardId) {
    if (this.image) {
      this.photoService.uploadForGiftCard(giftCardId, this.image)
        .subscribe();
    }
  }
}
