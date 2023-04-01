import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UpdateComponent } from "./component/main/update/update.component";
import { CreateComponent } from "./component/main/create/create.component";
import { DetailComponent } from "./component/main/detail/detail.component";
import { ListComponent } from "./component/main/list/list.component";

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
    path: 'detail/:id',
    component: DetailComponent,
  },

  {
    path: 'update/:id',
    component: UpdateComponent,
  },

  {
    path: 'delete/:id',
    component: UpdateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
