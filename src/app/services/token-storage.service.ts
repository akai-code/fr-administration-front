import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const TOKEN_KEY = 'token';
const USERNAME_KEY = 'username';
const IS_LOGGED_IN = 'isLoggedIn';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor(private router: Router) {}
  public clear(): void {
    localStorage.clear();
  }
  public save(token: string, id : string): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(IS_LOGGED_IN);
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USERNAME_KEY, id);
    localStorage.setItem(IS_LOGGED_IN, 'true');
    console.log(`Token saved: ${localStorage.getItem(TOKEN_KEY)}`);
  }
  public getToken(): string {
    const token = localStorage.getItem(TOKEN_KEY);
    return token === null ? '' : token;
  }
  public isLogged(): boolean {
    return localStorage.getItem(IS_LOGGED_IN) === 'true';
  }
  public logout(): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(IS_LOGGED_IN);
    this.router.navigateByUrl('/login');
  }
}
