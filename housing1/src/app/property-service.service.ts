import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {IProperty} from '../app/property-list-component/IProperty.interface';

@Injectable({
  providedIn: 'root',
})
export class PropertyServiceService {
  constructor(private httpClient: HttpClient) {}

  public propertyList:any;

  getPropertyList() {
    return this.httpClient.get('./data/data.json').pipe(
      map(data =>{
        const propertiesArray:Array<IProperty>=[];
        for (const id in data){
          if(data.hasOwnProperty(id)){
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    )
  }
}
