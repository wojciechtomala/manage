import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../../shared/services/LoginService/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  private _snackBar = inject(MatSnackBar);

  public readonly formBuilder = inject(FormBuilder);

  public loginForm = this.formBuilder.group({
    login: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(private loginService: LoginService, private router: Router) {}

  public async onSubmit(): Promise<void> {
    if (this.loginForm.valid) {
      console.log(this.loginForm.controls.login.value);
      console.log(this.loginForm.controls.password.value);
      this.loginService.login();
    } else {
      this._snackBar.open('Form is invalid!', 'Close', {
        duration: 3000,
      });
    }
  }
}
