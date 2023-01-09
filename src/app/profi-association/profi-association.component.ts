import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, InMemoryScrollingFeature, Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';


@Component({
  selector: 'app-profi-association',
  templateUrl: './profi-association.component.html',
  styleUrls: ['./profi-association.component.scss']
})
export class ProfiAssociationComponent {

  isLoggedIn: boolean = false;
  assoc: any = [];
  members: any = [];
  minutes: any = [];
  roles: any = [];
  errorMessage: string= '';
  updateFormVisible: boolean = false;
  createFormVisible: boolean = false;
  createMinuteVisible: boolean = false;
  userToUpdate: any;
  minuteToCreate: any;
  newRole: string = '';
  newMinute: any = {};
  test: boolean = false;


  constructor(
    private http: HttpClient,
    private tokenStorageService: TokenStorageService,
    private route: ActivatedRoute,
    private router: Router
  ){
    this.isLoggedIn = tokenStorageService.isLogged();
  }

  ngOnInit(): void {
    const associationId = this.route.snapshot.params['associationId'];
    console.log(associationId);
    this.http.get(`http://localhost:3000/associations/${associationId}`).subscribe(assoc => this.assoc = assoc);
    this.http.get(`http://localhost:3000/associations/${associationId}/members`).subscribe(members => this.members = members);
    this.http.get(`http://localhost:3000/associations/${associationId}/minutes`).subscribe(minutes => this.minutes = minutes);
  }

  // Supprimer une association
  deleteAssoc() {
    const associationId = this.route.snapshot.params['associationId'];
    console.log(associationId);  
    this.http.delete(`http://localhost:3000/associations/${associationId}`).subscribe(response => {
      console.log(response);
    });
    this.router.navigateByUrl('/associations')
    .catch((error: HttpErrorResponse) => {
      console.error(error);
      this.errorMessage = 'Une erreur s\'est produite lors de la connexion';
    });
  }

  // Ouvre le formulaire de mise à jour de rôle
  openUpdateForm(user: any) {
    if (user.role) {
      this.updateFormVisible = true;
      this.createFormVisible = false;
    }else {
      this.createFormVisible = true;
      this.updateFormVisible = false;
    }
    this.userToUpdate = user;
  }

  // Mise à jour du rôle d'un membre
  updateUserRole(user: any) {
    const associationId = this.route.snapshot.params['associationId'];
    this.http.put(`http://localhost:3000/roles/${user.id}/${associationId}`, { name: this.newRole }).subscribe(response => {
      this.ngOnInit();
      this.updateFormVisible = false;
      this.newRole = '';
    });
  }

  // Création d'un rôle pour un membre
  createUserRole(user: any) {
    const associationId = this.route.snapshot.params['associationId'];
    this.http.post('http://localhost:3000/roles/', { idUser: user.id, idAssociation: associationId, name: this.newRole }).subscribe(response => {
      this.ngOnInit();
      this.createFormVisible = false;
      this.newRole = '';
    });
  }

  // Ajouter une minute
  AjouterMinute() {
    this.createMinuteVisible = !this.createMinuteVisible;
  }

  // Création d'une minute
  createMinute() {
    const associationId = this.route.snapshot.params['associationId'];
    let membersIds = [];
    console.log(this.newMinute.idUsers);
    if (this.newMinute.idUsers) {
      membersIds = this.newMinute.idUsers.split(',').map((id: string | number) => +id);
    }
 
    for (let i = 0; i < membersIds.length; i++) {
      if (membersIds[i] in this.members) {
      }else {
        this.test = true;
      }
    }

    if (this.test) {
      this.errorMessage = 'Un ou plusieurs membres n\'existent pas';
    }else {
      let data = {content: this.newMinute.content, date: this.newMinute.date, idAssociation: associationId, idUsers: membersIds};
      this.http.post('http://localhost:3000/minutes/', data).subscribe(response => {
        this.ngOnInit();
        this.createMinuteVisible = false;
        this.newMinute = '';
      });
    }

  }
}
