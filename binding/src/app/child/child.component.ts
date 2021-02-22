import {Component, Input , EventEmitter, Output} from '@angular/core';

@Component({
    selector:'child-comp',
    template:`
        <h3>Child Component</h3>
        {{recievedData}}
        <button (click)="passDataToParent()">CLick me to send data to parent</button>
    `
})
export class ChildComponent{

    @Input("parentData")
    public recievedData;

    public dataToEmit="";

    @Output()
    public childComponentEvent = new EventEmitter();

    passDataToParent(){
        this.dataToEmit = this.recievedData + " child topup";
        this.childComponentEvent.emit(this.dataToEmit);
    }
}