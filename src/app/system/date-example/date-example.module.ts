import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateExampleComponent } from './date-example.component';
import {DateExampleRoutingModule} from "./date-example-routing.module";


@NgModule({
  declarations: [
    DateExampleComponent
  ],
  imports: [
    CommonModule,
    DateExampleRoutingModule
  ]
})
export class DateExampleModule { }
