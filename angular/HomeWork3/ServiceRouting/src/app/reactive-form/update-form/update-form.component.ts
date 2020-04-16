import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { UsersServiceService } from 'src/app/users-service.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {

  currentUser;
  userId;

  updateForm: FormGroup = new FormGroup({
    password: new FormControl('', [
      Validators.required
    ]),
    age: new FormControl('')
  });
  constructor(private userServiceobj: UsersServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.updateForm.valueChanges.subscribe((changes) => {
      console.log('Update Form valueChanges ', changes);
    });

    this.updateForm.statusChanges.subscribe((status) => {
      console.log('Update Form statusChanges ', status, this.updateForm);
    });






    this.route.params.subscribe(
      (param) => {
        this.userId = param['id'];
        this.userServiceobj.getUser(param['id']).subscribe(
          (result) => {
            this.currentUser = result;
            this.updateForm.setValue({
              password: this.currentUser.password,
              age: this.currentUser.age,
            });
            console.log('Result: Get User API - ', result);
          },
          (error) => {
            console.log('Error: Get User API - ', error);
          },
          () => {
            console.log('Complete: Get User API');
          }
        );
      }
    );
  }
  updateUser() {
    this.userServiceobj.updateUser({
      ...this.updateForm.value,
      id: this.userId
    }).subscribe(
      (result) => {
        console.log("Update ParticularUser API")
        this.updateForm.reset();
      },
      (error) => {
        console.log('Error: Create User API - ', error);
      },
      () => {
        console.log('Complete: Create User API');
      }

    );
  }


}
