import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-rechercher',
  templateUrl: './rechercher.component.html',
  styleUrls: ['./rechercher.component.scss']
})
export class RechercherComponent {
  isLoggedIn: boolean = false;
  userId: string = '';
  errorMessage: string= '';
  user: any = {};

  constructor(
    private http: HttpClient,
    private tokenStorageService: TokenStorageService,
    private route: Router
  ){
    this.isLoggedIn = tokenStorageService.isLogged();
  }

  onSubmit() {
    this.http.get(`http://localhost:3000/users/id/${this.userId}`)
      .toPromise()
      .then(user => {
        this.user = user;
        this.route.navigate(['/profilUtilisateur', this.userId]);
      })
      .catch(error => {
        // Si une erreur est retournée, affichez un message d'erreur
        this.errorMessage = 'Aucun utilisateur trouvé';
        return;
      });
  }
}
