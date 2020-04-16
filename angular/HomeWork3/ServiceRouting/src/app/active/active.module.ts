import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserActiveComponent } from './user-active/user-active.component';



@NgModule({
  declarations: [UserActiveComponent],
  imports: [
    CommonModule
  ],
  exports:[UserActiveComponent]
})
export class ActiveModule { }
