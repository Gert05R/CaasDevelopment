import { Injectable } from '@angular/core';
import { Activity } from './latest-activities/activity-interface';
import { Activities } from './latest-activities/latestActivitiesMock';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs';
import { ToDo } from './to-do/todo-interface';
import { todolist } from './to-do/mock-todo';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  getActivities(): Observable<Activity[]> {
    // TODO: send the message _after_ fetching the heroes
    //this.messageService.add('HeroService: fetched heroes');
    return of(Activities);
  }

  getActivity(id: number | string) {
    return this.getActivities().pipe(
      // (+) before `id` turns the string into a number
      map((activiTies: Activity[]) => activiTies.find(Act => Act.id === +id)!)
    );
  }

  getToDoes(): Observable<ToDo[]> {
    // TODO: send the message _after_ fetching the heroes
    //this.messageService.add('HeroService: fetched heroes');
    return of(todolist);
  }

  getToDo(id: number | string) {
    return this.getToDoes().pipe(
      // (+) before `id` turns the string into a number
      map((todoes: ToDo[]) => todoes.find(TD => TD.id === +id)!)
    );
  }
}
