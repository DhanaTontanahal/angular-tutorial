import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  constructor(private housingService: HousingService) {}

  properties: any;

  ngOnInit(): void {
    this.housingService.getAllProperties().subscribe((data)=>{
      this.properties=data;
    },error=>{
      console.log()
    })
    // this.httpClient.get('data/properties.json').subscribe((data) => {
    //   this.properties = data;
    // });
  }
}
