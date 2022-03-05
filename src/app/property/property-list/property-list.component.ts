import { IProperty } from './../IProperty';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from './../../../services/housing.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  sellRent = 1;
  properties!: IProperty[];

  constructor(private housingService: HousingService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()){
      this.sellRent = 2;
    }
    this.housingService.getAllProperties(this.sellRent).subscribe(
      data => {
        this.properties = data;
        console.log(data);
        console.log(this.route.snapshot.url.toString());
      },
      err => {
        console.log(err);
      }
    );
  }

}
