import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./component/home/home.component";
import { TesstComponent } from "./component/tesst/tesst.component";
import { HighLightDirective } from "./Directive/high-light.directive";
import { PractiseComponent } from "./practise/practise.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TesstComponent,
    HighLightDirective,
    PractiseComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
