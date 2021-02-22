import {Observable} from 'rxjs';

const basicObservable = Observable.create(observer=>{
    observer.next('hello');
    observer.next('world');
    observer.complete();
    observer.next('continuos flow');
})

// =====================================================

basicObservable.subscribe(data=>{console.log(data)});