import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageModule } from './manage/manage.module';
import { Routes } from '@angular/router';
import { ActiveModule } from './active/active.module';
import { DeletedModule } from './deleted/deleted.module';
import { UsersServiceService } from './users-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ConcatPipe } from './concat.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ConcatPipe,
   
  ],
  imports: [
    BrowserModule,
    ActiveModule,
    DeletedModule,
    FormsModule,
    // ManageModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UsersServiceService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
