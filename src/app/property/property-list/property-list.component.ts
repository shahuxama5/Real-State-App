import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  propertyList: Array<any> = [
    {
    "id": 1,
    "name": "Uxama House",
    "house": "House",
    "price": 12000
  },
  {
    "id": 2,
    "name": "Dani House",
    "house": "Apartment",
    "price": 14000
  },
  {
    "id": 3,
    "name": "Tommy House",
    "house": "Banglow",
    "price": 12000
  },
  {
    "id": 4,
    "name": "Kudo House",
    "house": "Farm House",
    "price": 11000
  },
];

  constructor() { }

  ngOnInit(): void {
  }

}
