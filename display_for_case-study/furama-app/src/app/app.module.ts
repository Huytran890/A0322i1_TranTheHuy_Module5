import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Component/footer/footer.component';
import { HomeComponent } from './Component/home/home.component';
import { MainComponent } from './Component/main/main.component';
import { NavbarComponent } from './Component/navbar/navbar.component';


/* Material */
import {MatIconModule} from '@angular/material/icon';
import {CreateRegistrationComponent} from './Component/registration/create-registration/create-registration.component'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';


// import { NgToastModule } from 'ng-angular-popup';


// import {NgConfirmModule} from 'ng-confirm-box';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    MainComponent,
    NavbarComponent,
    CreateRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatSlideToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,

    // NgToastModule,
    // NgConfirmModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}


// "ng-confirm-box": "0.0.6",