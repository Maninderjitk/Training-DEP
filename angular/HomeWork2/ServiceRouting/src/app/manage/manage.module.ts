import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManageComponent } from './user-manage/user-manage.component';
import { LazyLoadedComponent } from './lazy-loaded/lazy-loaded.component';
import { RouterModule } from '@angular/router';

const userManageRoutes=[{
  path:'',component:UserManageComponent,
  children:[
   { path:':id',component:LazyLoadedComponent}
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
