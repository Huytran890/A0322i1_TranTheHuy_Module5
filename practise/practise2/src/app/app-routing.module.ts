import { createComponent } from "@angular/compiler/src/core";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UpdateComponent } from "./component/main/update/update.component";
import { CreateComponent } from "./component/main/create/create.component";
import { DetailComponent } from "./component/main/detail/detail.component";

const routes: Routes = [
  // {
  //   path: 'list', component: createComponent
  // },

  {
    path: "create",
    component: CreateComponent,
  },

  {
    path: "detail",
    component: DetailComponent,
  },

  {
    path: "update",
    component: UpdateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
