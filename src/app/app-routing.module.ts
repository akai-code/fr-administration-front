import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NouveauUserComponent } from './nouveau-user/nouveau-user.component';
import { ProfilComponent } from './profil/profil.component';
import { RechercherComponent } from './rechercher/rechercher.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'users', component: UsersListComponent, canActivate: [AuthGuard]},
  {path: 'profil', component: ProfilComponent, canActivate: [AuthGuard]},
  {path: 'nouveauUser', component: NouveauUserComponent, canActivate: [AuthGuard]},
  {path: 'rechercher', component: RechercherComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
