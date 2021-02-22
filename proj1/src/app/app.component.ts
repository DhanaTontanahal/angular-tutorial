import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
   Welcome to Simple form
   <br />
   <input (keyup)="onKey($event)" placeholder="Enter the name" type="text" />
   <button (click)="handleClick()">Submit</button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public value=""

  onKey(event){
    this.value = event.target.value;
  }

  handleClick(){
    console.log(this.value)
  }
}
