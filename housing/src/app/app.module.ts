import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PropertyCardComponentComponent } from './property-card-component/property-card-component.component';
import { PropertyListComponent } from './property-list/property-list.component';
import {TestComponent} from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
      PropertyCardComponentComponent,
      PropertyListComponent,
      TestComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
