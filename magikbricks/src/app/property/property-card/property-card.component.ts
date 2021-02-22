import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'property-card',
  templateUrl:'property-card.component.html',
  styleUrls:['property-card.component.css']
})

export class PropertyCardComponent implements OnInit {
  constructor() { }

  @Input()
  property:any;

  // property: any = {
  //   "id": 1,
  //   "type": 'House',
  //   "price": 12000,
  // };


  ngOnInit() { }
}
