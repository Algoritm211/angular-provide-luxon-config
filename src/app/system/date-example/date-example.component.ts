import { Component } from '@angular/core';
import {DateTime} from 'luxon'

@Component({
  selector: 'app-date-example',
  templateUrl: './date-example.component.html',
  styleUrls: ['./date-example.component.css']
})
export class DateExampleComponent {
   dateValue = new Date();

   formatDate(date: Date) {
     return DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_MED)
   }
}
