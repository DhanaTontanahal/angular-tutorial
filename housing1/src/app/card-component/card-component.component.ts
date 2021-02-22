import { Component, Input, OnInit } from '@angular/core';
import {IProperty} from '../property-list-component/IProperty.interface'

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.scss']
})
export class CardComponentComponent implements OnInit {

  @Input()
  cardContent:IProperty;
  //full advantage of typescript

  constructor() { }//1st

  ngOnInit() {
  }

}
