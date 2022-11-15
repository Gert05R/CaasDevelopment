import { Component, OnInit } from '@angular/core';
import { Activity } from './activity-interface';
import { Activities } from './latestActivitiesMock';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { DashboardService } from '../dashboard.service';
import {MatTableDataSource} from '@angular/material/table';
import { DashboardRoutingModule } from '../dashboard--routing.module';


@Component({
  selector: 'app-latest-activities',
  templateUrl: './latest-activities.component.html',
  styleUrls: ['./latest-activities.component.scss']
})
export class LatestActivitiesComponent implements OnInit {
  //activities!: any;
  activities$!: Observable<Activity[]>;
  selectedId = 0;

  displayedColumns: string[] = ['id','System' ,'ProjectName','SampleSet','DecisionModel','Date'];
  dataSource!: any;

  constructor(
    private route: ActivatedRoute,
    private service: DashboardService,
  ) { console.log(this.selectedId);}

  ngOnInit(): void {
    this.activities$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.service.getActivities();
      })
    );
    this.activities$.subscribe(activities => {
      this.dataSource = new MatTableDataSource(activities);});
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  print () {
    console.log(this.activities$.subscribe(activities => {
      this.dataSource = new MatTableDataSource(activities);})
  )}


}
