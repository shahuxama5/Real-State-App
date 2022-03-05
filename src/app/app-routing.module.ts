import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: PropertyListComponent
  },
  {
    path: 'rent-property', component: PropertyListComponent
  },
  {
    path: 'add-property', component: AddPropertyComponent
  },
  {
    path: 'property-detail/:id', component: PropertyDetailComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
