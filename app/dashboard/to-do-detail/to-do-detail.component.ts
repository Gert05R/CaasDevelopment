import { Component, OnInit } from '@angular/core';
import { ToDo } from '../to-do/todo-interface';
import { todolist } from '../to-do/mock-todo';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { DashboardService } from '../dashboard.service';
import { Observable } from 'rxjs';
import { DialogService } from 'src/app/shared/dialog.service';


@Component({
  selector: 'app-to-do-detail',
  templateUrl: './to-do-detail.component.html',
  styleUrls: ['./to-do-detail.component.scss']
})
export class ToDoDetailComponent implements OnInit {
  todo!: ToDo;
  editDescription: string = '';
  todoes$!: Observable<ToDo>;
  //list= todolist;

  constructor(
    //When subscribing to an observable in a component, you almost always unsubscribe when the component is destroyed.
    //However, ActivatedRoute observables are among the exceptions because ActivatedRoute and its observables are insulated from the Router itself.
    //https://angular.io/guide/router-tutorial-toh#milestone-3-heroes-feature
    private route: ActivatedRoute,
    private router: Router,
    private service: DashboardService,
    public dialog: DialogService
  ) { }

  //ngOnInit(): void {
    //this.todoes$= this.route.paramMap.pipe(
      //switchMap((params: ParamMap) =>
        //this.service.getToDo(params.get('id')!))
    //);
  //}

  ngOnInit(): void {
   this.route.data
      .subscribe(data => {
        const todo: ToDo = data['todo'];
        this.editDescription = todo.Description;
        this.todo = todo;
      });
  }


  //getActivity(idd= this.selectedActivity) {
  //  return Activities.findIndex(i => i.id === idd);
  //}

  gotoToDoes() {
    const todoID = this.todo ? this.todo.id : null;
    // Pass along the hero id if available
    //gotoHeroes() {
    // this.router.navigate(['/heroes']);}
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    //Not sure what the { id: activityId, foo: 'foo' } adds=> this adds optional parameters to the adress bar...
    this.router.navigate(['/todo', { id: todoID}]);
  }

  cancel() {
    this.gotoToDoes();
  }

  save() {
    this.todo.Description = this.editDescription;
    this.gotoToDoes();
  }

  canDeactivate(): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if (!this.todo || this.todo.Description === this.editDescription) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // observable which resolves to true or false when the user decides
    return this.dialog.confirm('Discard changes?');
  }

}


