import { Component, SimpleChanges } from '@angular/core';
import {DataService} from './Data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 100;

  constructor(private dataService:DataService){
    console.log(" parent : in constructor");
  }



  ngOnInit(){
    console.log("parent : inside ngOnInIt()...");
    // this.dataService
  }

  onChangeParentValue(){
    this.title = 999;
  }
}
