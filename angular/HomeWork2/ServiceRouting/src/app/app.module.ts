import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageModule } from './manage/manage.module';
import { Routes } from '@angular/router';
import { ActiveModule } from './active/active.module';
import { DeletedModule } from './deleted/deleted.module';
import { UsersServiceService } from './users-service.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ActiveModule,
    DeletedModule,
    // ManageModule,
    AppRoutingModule
  ],
  providers: [UsersServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
