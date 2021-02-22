import {Component} from "@angular/core";

@Component({
  selector:"app-test",
  template:`<h1>Hi This is the Test component created manually <b>{{propertTitle}}</b></h1>`,
  styleUrls:['./app-test.component.css']

})
export class TestComponent{

  public propertTitle = "propertyTitle";
}
