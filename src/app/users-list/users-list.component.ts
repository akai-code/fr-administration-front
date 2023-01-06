import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, lastValueFrom  } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  isLoggedIn: boolean = false;
  users: any= [];
  userID: string = '';

  constructor(
    private http: HttpClient,
    private tokenStorageService: TokenStorageService,
    private route: Router
  ){
    this.isLoggedIn = tokenStorageService.isLogged();
  }

  ngOnInit(): void {
    lastValueFrom(this.http.get('http://localhost:3000/users', { observe: 'response' })).then(response => this.users = response.body);
  }

  searchUser() {
    const search = (<HTMLInputElement>document.getElementById('search')).value;
    lastValueFrom(this.http.get(`http://localhost:3000/users/${search}`, { observe: 'response' })).then(response => this.users = response.body);
  }
}
