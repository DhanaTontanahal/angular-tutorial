import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import {FirebaseService} from '../Firebase.service';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent implements OnInit {

  isSignedIn = false;
  //DI
  constructor(public firebaseService:FirebaseService) { }

  @Output()
  public isLoggedInEvent = new EventEmitter();

  ngOnInit() {
    if(localStorage.getItem("user") !== null){
      this.isSignedIn = true;
    }
    else
    {
      this.isSignedIn = false;
    }

  }

  async onSignOut(){

    await this.firebaseService.signOut().then((res)=>{
      this.isSignedIn = false;
      this.isLoggedInEvent.emit(this.isSignedIn);
      //pass this to our parent
    }).catch((error)=>{
      console.error("Some failure occured..")
    })
  }

}


//local storage
//localStorage web api as part of javascript
