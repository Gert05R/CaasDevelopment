import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, ActivatedRoute, ParamMap } from '@angular/router';
import { FilteringComponent } from './filtering/filtering.component';

const dataReviewRoutes: Routes = [
  {path: '', component: FilteringComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(dataReviewRoutes)
  ],
  exports: [RouterModule]
})
export class DataReviewRoutingModule { }
