import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManageComponent } from './user-manage/user-manage.component';
import { LazyLoadedComponent } from './lazy-loaded/lazy-loaded.component';
import { RouterModule } from '@angular/router';
import { UpdateFormComponent } from '../reactive-form/update-form/update-form.component';
import { CreateFormComponent } from '../reactive-form/create-form/create-form.component';
import { ReactiveFormModule } from '../reactive-form/reactive-form.module';


const userManageRoutes = [
  {
    path: '', component: UserManageComponent,
    children: [
      //  { path:':id',component:LazyLoadedComponent},
      { path: 'create', component: CreateFormComponent },
      { path: 'edit/id', component: UpdateFormComponent }
    ]
  }
];


@NgModule({
  declarations: [UserManageComponent, LazyLoadedComponent],
  imports: [
    CommonModule,
    ReactiveFormModule,
    RouterModule.forChild(userManageRoutes)
  ],
  exports: [UserManageComponent, LazyLoadedComponent]
})
export class ManageModule { }
