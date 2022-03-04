import { HousingService } from './../../../services/housing.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  propertyList: any;

  constructor(private housingService: HousingService ) { }

  ngOnInit(): void {
    this.housingService.getAllProperties().subscribe(
      data => {
        this.propertyList = data;
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }

}
