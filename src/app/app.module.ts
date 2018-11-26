import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GiftcardsComponent } from './giftcards/giftcards.component';
import { GiftCardService } from './services/gift-card.service';
import { DataService } from './services/data.service';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './services/auth.service';
import { JwtModule } from '@auth0/angular-jwt';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GiftcardComponent } from './giftcard/giftcard.component';
import { RegisterComponent } from './register/register.component';
import { NewGiftcardComponent } from './new-giftcard/new-giftcard.component';
import { CategoryService } from './services/category.service';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { OrdersComponent } from './orders/orders.component';
import { CategoryComponent } from './category/category.component';
import { PhotoService } from './services/photo.service';
import { OrderService } from './services/order.service';
import { CartService } from './services/cart.service';

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    GiftcardsComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    NotFoundComponent,
    GiftcardComponent,
    NewGiftcardComponent,
    CartComponent,
    CategoriesComponent,
    OrdersComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: [
          "localhost:5000",
          "giftcardsapi.azurewebsites.net"
        ]
      }
    })
  ],
  providers: [
    GiftCardService,
    CategoryService,
    AuthService,
    CartService,
    OrderService,
    PhotoService
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
