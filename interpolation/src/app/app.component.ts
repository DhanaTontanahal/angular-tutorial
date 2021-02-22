import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public greeMsg = "Hi"

  greetMe(){
    return "Hello";
  }

  public currLoc =window.location.href;
}