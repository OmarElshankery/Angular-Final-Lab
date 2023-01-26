import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserFormComponent } from './components/login_form/login_form.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'users', component:UsersComponent},
  {path:'users/new', component:UserFormComponent},
  {path:'users/:id', component:UserFormComponent},
  {path:'usersDetails/:id', component:UserDetailsComponent},
  {path:'**', component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
