import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'//tell angular that in which ngModule we want to inject this service
})
export class HousingService {

  constructor(private httpClient:HttpClient) { }


  getAllProperties(){
    return this.httpClient.get('data/properties.json');
  }
}
