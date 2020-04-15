import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserActiveComponent } from './active/user-active/user-active.component';
import { UserManageComponent } from './manage/user-manage/user-manage.component';
import { HomeCompComponent } from './home/home-comp/home-comp.component';
import { UserDeletedComponent } from './deleted/user-deleted/user-deleted.component';
import { LazyLoadedComponent } from './manage/lazy-loaded/lazy-loaded.component';
import { CreateFormComponent } from './reactive-form/create-form/create-form.component';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', component: HomeCompComponent },
  { path: 'active', component: UserActiveComponent },
  { path: 'deleted', component: UserDeletedComponent },

  {
    path: 'manage',
    loadChildren: () => import('./manage/manage.module').then(
      (file) => file.ManageModule
    )
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
