import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavBarComponent } from './shared/components/nav/nav-bar/nav-bar.component';
import { LoginService } from './shared/services/LoginService/login.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Manage Me';

  private loginService = inject(LoginService);

  public isUserLoggedIn: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.subscribeForIsUserLoggedInValueChange();
  }

  private subscribeForIsUserLoggedInValueChange(): void {
    this.loginService.isUserLoggedIn$.subscribe({
      next: (isUserLoggedIn: boolean) => {
        this.isUserLoggedIn = isUserLoggedIn;
        if (this.isUserLoggedIn) {
          this.router.navigate(['/']);
        } else {
          this.router.navigate(['/login']);
        }
      },
    });
  }
}
