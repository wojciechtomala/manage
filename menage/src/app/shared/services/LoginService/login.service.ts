import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private _isUserLoggedIn: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  public readonly isUserLoggedIn$: Observable<boolean> = this
    ._isUserLoggedIn as Observable<boolean>;

  constructor() {}

  public login(): void {
    this._isUserLoggedIn.next(true);
  }

  public logout(): void {
    this._isUserLoggedIn.next(false);
  }
}
