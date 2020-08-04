import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneNumberComponent } from './components/phone-number/phone-number.component';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment.prod';
import { AngularFireModule } from '@angular/fire';
import * as firebase from 'firebase';
firebase.initializeApp(environment.firebaseConfig);
@NgModule({
  declarations: [
    AppComponent,
    PhoneNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
