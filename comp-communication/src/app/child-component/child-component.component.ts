import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html'
})
export class ChildComponentComponent implements OnInit {


  @Input()//this is expected as input fromparent
  public parent:string;


  constructor() { }


  ngOnInit() {
  }

}
