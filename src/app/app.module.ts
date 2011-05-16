import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LuxonConfigDateModule} from "./core/luxon-date/luxon-config-date.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // CHANGE PARAMS HERE
    LuxonConfigDateModule.forRoot({
      defaultLocale: 'zh'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
