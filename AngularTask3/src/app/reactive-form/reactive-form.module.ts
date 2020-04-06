import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateFormComponent } from './update-form/update-form.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { FormGroup, FormControl } from '@angular/forms';



@NgModule({
  declarations: [UpdateFormComponent, CreateFormComponent],
  imports: [
    CommonModule
  ],
  exports:[ReactiveFormModule,CreateFormComponent]
})
export class ReactiveFormModule { 
  // updateForm:FormGroup=new FormGroup({
  //  Password=new FormControl('',
  //  )
  // })
}
