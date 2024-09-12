import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private _user: string = '1';

  get user() {
    return this._user;
  }

  set user(user: string) {
    this._user = user;
  }
}
