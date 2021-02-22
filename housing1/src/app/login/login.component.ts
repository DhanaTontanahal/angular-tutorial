import { Component, OnInit ,EventEmitter, Output } from '@angular/core';
import { FirebaseService } from '../Firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public isLoggedIn: boolean = false;
  constructor(public firebaseService: FirebaseService) {}
  @Output()
  public isLoggedInEvent = new EventEmitter();

  ngOnInit() {}

  async onSignUp(email, pass) {
    console.log('Inside the signup function');
    await this.firebaseService.signUp(email, pass).then((res) => {

      this.isLoggedIn = true;
      this.isLoggedInEvent.emit(this.isLoggedIn);
      alert('The user is signup now');
    });
  }

  async onSignIn(email, pass) {
    console.log("Inside the signin function");
    await this.firebaseService.signIn(email, pass).then((res) => {
      this.isLoggedIn = true;
      this.isLoggedInEvent.emit(this.isLoggedIn);
      alert("The user is signed in, navigating to dashboard");
    });
  }



}
