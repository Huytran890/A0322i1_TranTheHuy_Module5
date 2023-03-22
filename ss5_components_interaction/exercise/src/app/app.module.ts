import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountdownTimeComponent } from './component/countdown-time/countdown-time.component';
import { RatingBarComponent } from './component/rating-bar/rating-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CountdownTimeComponent,
    RatingBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
