import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PropertyServiceService } from '../property-service.service';
import {IProperty} from '../property-list-component/IProperty.interface';

@Component({
  selector: 'app-property-list-component',
  templateUrl: './property-list-component.component.html',
  styleUrls: ['./property-list-component.component.scss'],
})
export class PropertyListComponentComponent implements OnInit {

  //css/styling changes to card component
  //expected to come from API // Service changes
  //fb authentication : signin -->integrating with landing //username/password-->dashboard

  public propertyList:Array<IProperty>;

  constructor(private propertyService:PropertyServiceService ) {
  }

  ngOnInit() {
    this.propertyService.getPropertyList().subscribe((data)=>{
      this.propertyList=data;
    })
  }

}

//millions of data
//fetch what is seen by user (pagintion) --> 25 prop records
//bottom pagination component
// > 1--> 2
//next 25 records
// 2nd
//no pagination
//no pagination ui controls
//looking like only prop records
//scroll event
//scroll down or up

//down--> capture based on the positionof the scroll (page size)
//if user is at bottom of page
//true : lazy loading --> fetch call and get next et of records and show dynamically

//sorting
//1 way
// what ever user is loking at we need to sort that or entire data ?


