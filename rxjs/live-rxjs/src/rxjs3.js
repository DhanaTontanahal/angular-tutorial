import {Observable , of} from 'rxjs';
import {filter, map} from 'rxjs/operators';

// const basicObservable = Observable.create(observer=>{
//     observer.next('hello');
//     observer.next('world');
// })

const basicObservable = Observable.create(observer=>{
    observer.next(100);
    observer.next(200);
    observer.next(300);
})


// const streamOfTradePrices = of([1765276, 8752725, 1778 , 98719, 199 , 100 , 10 , 82767265])
// ---------------------------------------------------------------------------------------------------------------------
//=============================================================================    [[[[[[[[[[[[modifications]]]]]]]]]]]]
// ----------------------------------------------------------------------------------------------------------------------

const modifiedObs = basicObservable.pipe(
     map(n=>n+10),
     filter(f=>f < 200)
    );

//==============================


modifiedObs.subscribe(d=>console.log(d))