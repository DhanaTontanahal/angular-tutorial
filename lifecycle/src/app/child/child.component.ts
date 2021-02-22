import { Component, Input, OnInit , SimpleChange, SimpleChanges} from '@angular/core';
import {DataService} from '../Data.service';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent  {

  @Input()
  parentData;

  myData:any;

  //have a custom event
  //trigger the event-->emit event (passData)
  //parent --> receive the data
  //@Output --> custom event : new EventEmitter()
  //.emit(data) data:any
  //bind that event (customEvent) "parentVar = valuePassedFromtCHild<$event>"
  //can use in ts and interpolate afteror before manipu

  constructor(private dataService:DataService) {
    console.log("child constructor");
    console.log(this.parentData)//undefined
   }

   ngOnInit() {
    console.log("child ngOnit");
    //throw undefined
    // console.log(this.parentData)
    // this.myData = this.dataService.getData();
  }


  ngOnChanges(changes:SimpleChanges){


    // console.log("Inside the ngOnChange")
    // console.log(changes.parentData)
    // const myChanges:SimpleChange  = changes.parentData;
    // console.log(myChanges);
    // if(myChanges.previousValue !== myChanges.currentValue){
    //   //business logic
    //   //some kind of data manipulation
    // }

  }


  //ngDoCheck

  //ngAfterConstructorInit
  //ngAfterContructorChecked
  //...ViewInit
  //...ViewChecked

  //ngOnDestroy

}
