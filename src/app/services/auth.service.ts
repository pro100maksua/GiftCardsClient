import * as moment from "moment"
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { shareReplay, tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {
  url = "https://giftcardsapi.azurewebsites.net/api/users";

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {
  }

  login(credentials) {
    return this.http.post(this.url + "/login",
      credentials,
      { responseType: "text" })
      .pipe(
        tap(token => localStorage.setItem("token", token)),
        shareReplay());
  }

  register(credentials) {
    return this.http.post(this.url + "/register",
      credentials,
      { responseType: "text" })
      .pipe(
        tap(token => localStorage.setItem("token", token)),
        shareReplay());
  }

  logout() {
    localStorage.removeItem("token");
  }

  isLoggedIn() {
    return !this.jwtHelper.isTokenExpired();
  }

  isAdmin() {
    if (!this.isLoggedIn()) {
      return false;
    }

    const token = this.jwtHelper.decodeToken();
    return token.role === "Admin";
  }
}