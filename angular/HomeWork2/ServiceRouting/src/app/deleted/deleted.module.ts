import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDeletedComponent } from './user-deleted/user-deleted.component';



@NgModule({
  declarations: [UserDeletedComponent],
  imports: [
    CommonModule
  ],
 exports:[UserDeletedComponent]
})
export class DeletedModule { }
