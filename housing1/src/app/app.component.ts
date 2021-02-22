import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  //this needs to be updated when actaul signin and signup happens
  //this should be assigned the value dynamically on the fly.
  //We expect the login component to send the isLogged value on fly
  //login is child component
  //app component is parent component
  // send data from child to parent
  //getting this value from $event which is sending us isLoggedin status
  //from the child component with the help of event emitter
  //i.e on signuo or on signin
  public isLoggedIn:boolean;

  title = 'housing1';


}
