import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AppComponent } from './app.component';
import { CardComponentComponent } from './card-component/card-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { PropertyListComponentComponent } from './property-list-component/property-list-component.component';
import { HttpClientModule } from '@angular/common/http';
import { PropertyServiceService } from './property-service.service';
import {FirebaseService} from './Firebase.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [	
    AppComponent,
    CardComponentComponent,
    HeaderComponentComponent,
    PropertyListComponentComponent,
      LoginComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyAnOOjvkmfo-FU_sPNkHx8wyZShPSc-C6M',
      authDomain: 'mazic-briks.firebaseapp.com',
      projectId: 'mazic-briks',
      storageBucket: 'mazic-briks.appspot.com',
      messagingSenderId: '970359221192',
      appId: '1:970359221192:web:95e6bbc03c6dddf9d2eefd',
    }),
  ],
  providers: [PropertyServiceService,FirebaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
