import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private loggedUser: any = {
    name: 'Hubert',
  };

  public get getLoggedUser(): any {
    return this.loggedUser;
  }

  constructor() {}
}
