import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;
  error: boolean = false;

  constructor(fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute) {
    this.form = fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.form.invalid) {
      return;
    }

    const loginForm = this.form.value;

    if (loginForm.userName && loginForm.password) {
      this.authService.login(loginForm)
        .subscribe(() => {
          const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
          this.router.navigateByUrl(returnUrl || '/');
        },
          error => {
            if (error.status === 404) {
              this.error = true;
            }
          });
    }
  }
}