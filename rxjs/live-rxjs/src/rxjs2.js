import {Observable } from 'rxjs';
import {shareReplay} from 'rxjs/operators';

// const ofObservable = of('streamofdata' );

// const fromObservable  = from('streamofdatainchunks');


// const fromEventObservable = fromEvent(document , 'click');

// const intervalObservable = interval(1000);


const coldObservable = Observable.create(observer=>{
    observer.next(Math.random());
});


const hotObservable = coldObservable.pipe(shareReplay(1));
// ============================================================

hotObservable.subscribe(d=>console.log(d));
hotObservable.subscribe(d=>console.log(d));
