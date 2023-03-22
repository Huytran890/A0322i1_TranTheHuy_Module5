import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularColorPickerAppComponent } from './component/angular-color-picker-app/angular-color-picker-app.component';
import { AngularCalculatorAppComponent } from './component/angular-calculator-app/angular-calculator-app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AngularCalculatorAppComponent,
    AngularColorPickerAppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
