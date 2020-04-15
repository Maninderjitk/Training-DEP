import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AutoCompComponent } from './auto-comp/auto-comp.component';
import { ManualCompComponent } from './manual-comp/manual-comp.component';


@NgModule({
  declarations: [
    AppComponent,
    AutoCompComponent,
    ManualCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
