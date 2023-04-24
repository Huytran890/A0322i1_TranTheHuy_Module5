import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './component/main/list/list.component';
import { CreateComponent } from './component/main/create/create.component';
import { UpdateComponent } from './component/main/update/update.component';
import { DetailComponent } from './component/main/detail/detail.component';


const routes: Routes = [
  {
    path: '', component: ListComponent,
  },

  {
    path: 'list', component: ListComponent,
  },
  
  {
    path: 'create',
    component: CreateComponent,
  },


  {
    path: 'update/:id',
    component: UpdateComponent,
  },

  {
    path: 'detail/:id',
    component: DetailComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
