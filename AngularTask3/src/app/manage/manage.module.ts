import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManageComponent } from './user-manage/user-manage.component';
import { LazyLoadedComponent } from './lazy-loaded/lazy-loaded.component';
import { RouterModule } from '@angular/router';
import { UpdateFormComponent } from '../reactive-form/update-form/update-form.component';
import { CreateFormComponent } from '../reactive-form/create-form/create-form.component';


const userManageRoutes=[{
  path:'',component:UserManageComponent,
  children:[
   { path:':id',component:LazyLoadedComponent},
   {path:'edit/id',component:UpdateFormComponent},
  //  {path:'create',component:CreateFormComponent}
  ]}
];


@NgModule({
  declarations:[ UserManageComponent, LazyLoadedComponent],
  imports: [
    CommonModule,
    
    // RouterModule
    RouterModule.forChild(userManageRoutes)
  ],
  exports:[UserManageComponent, LazyLoadedComponent]
})
export class ManageModule { }
