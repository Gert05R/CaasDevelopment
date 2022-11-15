import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LatestActivitiesComponent } from './latest-activities/latest-activities.component';
import { DashboardRoutingModule } from './dashboard--routing.module';
import { ToDoComponent } from './to-do/to-do.component';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';
import { ToDoDetailComponent } from './to-do-detail/to-do-detail.component';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    LandingPageComponent,
    LatestActivitiesComponent,
    ToDoComponent,
    ActivityDetailComponent,
    ToDoDetailComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatTableModule
  ]

})
export class DashboardModule { }
