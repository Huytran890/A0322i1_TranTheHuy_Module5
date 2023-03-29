import { CreateContractComponent } from './Component/contract/create-contract/create-contract.component';
import { DetailCustomerComponent } from './Component/customer/detail-customer/detail-customer.component';
import { MainComponent } from './Component/main/main.component';
import { UpdateCustomerComponent } from './Component/customer/update-customer/update-customer.component';
import { CreateCustomerComponent } from './Component/customer/create-customer/create-customer.component';
import { ListCustomerComponent } from './Component/customer/list-customer/list-customer.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'service', component: MainComponent},
  {path: '', component: MainComponent},

  {path: 'customer/create', component: CreateCustomerComponent},
  {path: 'customer/list', component: ListCustomerComponent},
  {path: 'customer/detail/:id', component: DetailCustomerComponent},
  {path: 'customer/update/:id', component: UpdateCustomerComponent},


  {path: 'contract/create', component: CreateContractComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
