import {Component} from '@angular/core'

@Component({
    selector:'post-property',
    template:`

            <div class="container">
        <div class="row">
            <div class="col-sm">
            One of three columns
            </div>
            <div class="col-sm">
            One of three columns
            </div>
            <div class="col-sm">
            One of three columns
            </div>
        </div>
        </div>


        <h2>Post your property</h2>
        <label>Enter your name</label>
        <input type="text" />

        <label>Enter address of property</label>
        <input type="text" />

        <label>Is it 1bhk or 2 bhk or single room</label>
        <input type="text" />

        <label>What is the price on daily basis?</label>
        <input type="text" />


    `
})
export class PostProp{}