import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: FormGroup;
  errors;

  constructor(fb: FormBuilder,
    private authService: AuthService,
    private router: Router) {
    this.form = fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: [''],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  register() {
    if (this.form.invalid) {
      return;
    }

    const registerForm = this.form.value;
    console.log(registerForm);
    if (registerForm.userName && registerForm.password) {
      this.authService.register(registerForm)
        .subscribe(() => {
          this.router.navigateByUrl("/");
        });
    }
  }
}