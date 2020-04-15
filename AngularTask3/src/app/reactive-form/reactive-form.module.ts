import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateFormComponent } from './update-form/update-form.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { FormGroup, FormControl, ReactiveFormsModule ,AbstractControl, FormsModule} from '@angular/forms';



@NgModule({
  declarations: [UpdateFormComponent, CreateFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  
  ],
  exports:[ReactiveFormModule,CreateFormComponent,UpdateFormComponent]
})
export class ReactiveFormModule { 
  // updateForm:FormGroup=new FormGroup({
  //  Password=new FormControl('',
  //  )
  // })
}
