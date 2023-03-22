import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateRegistrationComponent } from './Component/registration/create-registration/create-registration.component';


const routes: Routes = [
  // {path: '', redirectTo: 'register', pathMatch: 'full'},
  // {path: 'register', redirectTo: 'register', pathMatch: 'full'},
  // {path: 'customer', component: CreateRegistrationComponent},
  // {path: 'employee', }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
