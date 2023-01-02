import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(
    private tokenStorageService: TokenStorageService,
    private route: Router
  ) { 
    this.isLoggedIn = tokenStorageService.isLogged();
  }

  ngOnInit(): void {
  }

  // Fonction pour accéder à son profil et mettre à jour ses informations
  accessProfile() {
    // Code pour accéder à son profil et mettre à jour ses informations
  }

  // Fonction pour lister les utilisateurs
  listUsers() {
    // Code pour lister les utilisateurs
  }

  // Fonction pour lister les associations
  listAssociations() {
    // Code pour lister les associations
  }

  // Fonction pour accéder à la fiche d'un utilisateur
  accessUserProfile() {
    // Code pour accéder à la fiche d'un utilisateur
  }

  // Fonction pour accéder à la fiche d'une association
  accessAssociationProfile() {
    // Code pour accéder à la fiche d'une association
  }

  // Fonction pour rechercher un utilisateur ou une association
  searchUserOrAssociation() {
    // Code pour rechercher un utilisateur ou une association
  }

  // Fonction pour supprimer une association ou un utilisateur
  deleteUserOrAssociation() {
    // Code pour supprimer une association ou un utilisateur
  }

  // Fonction pour ajouter un utilisateur
  addUser() {
    // Code pour ajouter un utilisateur
  }

  // Fonction pour ajouter une association
  addAssociation() {
    // Code pour ajouter une association
  }

  // Fonction pour modifier un utilisateur
  updateUser() {
    // Code pour modifier un utilisateur
  }

  // Fonction pour modifier une association
  updateAssociation() {
    // Code pour modifier une association
  }

  // Fonction pour se déconnecter
  logout() {
    // Code pour se déconnecter
  }

}
