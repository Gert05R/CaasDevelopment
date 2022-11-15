import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

//Although it doesn't actually log in, it has an isLoggedIn flag to tell you
//whether the user is authenticated. Its login() method simulates an API call
//to an external service by returning an observable that resolves successfully
//after a short pause. The redirectUrl property stores the URL that the user
//wanted to access so you can navigate to it after authentication.


export class AuthService {

  //Although it doesn't actually log in, it has an isLoggedIn flag to tell you whether the user is authenticated. Its login() method simulates an API call to an external service by returning an observable that resolves successfully after a short pause.
  //Should be set to false
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string | null = null;

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(() => this.isLoggedIn = true)
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  constructor() { }
}
