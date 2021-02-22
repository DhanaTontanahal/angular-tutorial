import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  isLoggedIn: boolean = false;

  constructor(public firebaseAuth: AngularFireAuth) {}

  //signining up
  async signUp(email: string, pass: string) {
    await this.firebaseAuth
      .createUserWithEmailAndPassword(email, pass)
      .then((res) => {
        this.isLoggedIn = true;
      });
  }
//call backs / promises

  //Logging in
  async signIn(email: string, pass: string) {
    await this.firebaseAuth
    .signInWithEmailAndPassword(email, pass)//method // api call //asynchronous//future point of time
    .then((res) => {
      this.isLoggedIn = true;
    });
}

  async signOut() {
    //Firebase API
    //External API <our network>
    //future
    await this.firebaseAuth.signOut().then((res) => {
      this.isLoggedIn = false;
    }).catch((error)=>{
      alert("Error occurred !")
    })
  }
}
