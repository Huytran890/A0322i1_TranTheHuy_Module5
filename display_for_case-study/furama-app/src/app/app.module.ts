import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Component/footer/footer.component';
import { HomeComponent } from './Component/home/home.component';
import { MainComponent } from './Component/main/main.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { CreateCustomerComponent } from './Component/customer/create-customer/create-customer.component';
import { UpdateCustomerComponent } from './Component/customer/update-customer/update-customer.component';
import { ListCustomerComponent } from './Component/customer/list-customer/list-customer.component';


/* Material */
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatListModule} from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';

/* reactive-form */
import { ReactiveFormsModule } from '@angular/forms';

/* ng-toastr */
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    MainComponent,
    NavbarComponent,
    CreateCustomerComponent,
    UpdateCustomerComponent,
    ListCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatProgressBarModule,
    MatListModule,
    MatChipsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}


// "ng-confirm-box": "0.0.6",