import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DateExampleComponent} from "./date-example.component";

const routes: Routes = [
  {
    path: '', component: DateExampleComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DateExampleRoutingModule { }
