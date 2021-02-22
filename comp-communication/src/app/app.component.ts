import { Component } from '@angular/core';

@Component({
  selector: 'app-root',

  template: `


  <h1>Parent component boss
  </h1>

  <app-child-component [parent]="name"></app-child-component>


`

})
export class AppComponent {

  name:string = "this is the parent";


}
