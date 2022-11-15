import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { DashboardService } from './dashboard.service';
import { ToDo } from './to-do/todo-interface';
import { todolist } from './to-do/mock-todo';

//https://angular.io/guide/router-tutorial-toh#canmatch-controlling-route-matching-based-on-application-conditions

@Injectable({
  providedIn: 'root'
})
export class ToDoResolverService implements Resolve<ToDo> {

  constructor(private ds: DashboardService, private router: Router) {
   }

   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ToDo> | Observable<never> {
    const id = route.paramMap.get('id')!;

    return this.ds.getToDo(id).pipe(
      mergeMap(todo => {
        if (todo) {
          return of(todo);
        } else { // id not found
          this.router.navigate(['/dashboard']);
          return EMPTY;
        }
      })
    );

}
}
