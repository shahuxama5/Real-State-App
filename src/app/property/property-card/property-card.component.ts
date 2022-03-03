import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  property: any = {
    "id": 1,
    "name": "Uxm House",
    "house": "House",
    "price": 10000
  }

  constructor() { }

  ngOnInit(): void {
  }

}
