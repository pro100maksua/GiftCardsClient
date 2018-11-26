import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GiftcardsComponent } from './giftcards/giftcards.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GiftcardComponent } from './giftcard/giftcard.component';
import { RegisterComponent } from './register/register.component';
import { NewGiftcardComponent } from './new-giftcard/new-giftcard.component';
import { AuthGuard } from './services/auth-guard.service';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { OrdersComponent } from './orders/orders.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', redirectTo: '/giftcards', pathMatch: 'full' },
    { path: 'giftcards', component: GiftcardsComponent },
    { path: 'giftcards/new', component: NewGiftcardComponent, canActivate: [AuthGuard] },
    { path: 'giftcards/:id', component: GiftcardComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'categories/new', component: CategoryComponent, canActivate: [AuthGuard] },
    { path: 'categories/:id', component: GiftcardsComponent },
    { path: 'orders', component: OrdersComponent },
    { path: 'orders/:id', component: CartComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'cart', component: CartComponent },
    { path: '**', component: NotFoundComponent },
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }