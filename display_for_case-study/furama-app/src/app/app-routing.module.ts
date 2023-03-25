import { UpdateCustomerComponent } from './Component/customer/update-customer/update-customer.component';
import { CreateCustomerComponent } from './Component/customer/create-customer/create-customer.component';
import { ListCustomerComponent } from './Component/customer/list-customer/list-customer.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // {path: '/customer', component: ListCustomerComponent},
  // {path: '/customer/create', component: CreateCustomerComponent},
  // // {path: '/customer/update', component: CreateRegistrationComponent},
  // {path: '/customer/detail', component: UpdateCustomerComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
