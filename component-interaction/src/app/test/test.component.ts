import {Component, Input, EventEmitter, Output} from '@angular/core'
@Component({
    selector:'app-test',
    template:`
        <h3>Child Component</h3>
            <h4>Received dats is : {{receivedData}}</h4>
            <button (click)="fireChildEvent()">Send Data to Parent</button>
    `
})
export class TestComponent{

    @Input("parentData")
    public receivedData;

    public dataToBeSent;

    @Output()
    public childEvent = new EventEmitter();


    fireChildEvent(){
        console.log("child event")
        this.dataToBeSent = this.receivedData+" Tontanahal"
        this.childEvent.emit(this.dataToBeSent);
    }
  
}