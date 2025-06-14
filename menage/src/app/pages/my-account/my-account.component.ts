import { Component, inject, input } from '@angular/core';
import { LoginService } from '../../shared/services/LoginService/login.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-my-account',
  imports: [MatButtonModule],
  templateUrl: './my-account.component.html',
  styleUrl: './my-account.component.scss',
})
export class MyAccountComponent {
  private readonly loginService = inject(LoginService);

  constructor() {}

  public onLogout(): void {
    this.loginService.logout();
  }
}
