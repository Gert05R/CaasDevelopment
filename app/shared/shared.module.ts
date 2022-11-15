import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ComposeMessagComponent } from './compose-messag/compose-messag.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    ComposeMessagComponent,

  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    FormsModule,

  ]

})
export class SharedModule { }
