import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { slideInAnimation, slideInAnimation2 } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ slideInAnimation, slideInAnimation2]
})
export class AppComponent {

  isDarkThme: boolean = false;

  constructor(private contexts: ChildrenOutletContexts) {}

  getAnimationData() {
      return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  ngOnInit() {
    this.isDarkThme = localStorage.getItem('theme') === "Dark" ? true:false;
  }

  storeThemeSelection() {
    localStorage.setItem('theme', this.isDarkThme ? "Dark" : "Light")
  }
}
