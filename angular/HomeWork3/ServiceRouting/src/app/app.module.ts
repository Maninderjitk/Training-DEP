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
import {ReactiveFormsModule} from'@angular/forms';
import { UpdateFormComponent } from './reactive-form/update-form/update-form.component';
import { CreateFormComponent } from './reactive-form/create-form/create-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ConcatPipe,
    UpdateFormComponent,
    CreateFormComponent
   
  ],
  imports: [
    BrowserModule,
    ActiveModule,
    DeletedModule,
    // ManageModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [UsersServiceService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
