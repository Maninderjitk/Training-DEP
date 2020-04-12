import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from 'src/app/users-service.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.css']
})
export class UserManageComponent implements OnInit {

  fname: string;
  lname: string;
  login: string;
  password: string;
  age: number;
  isDeleted: boolean;
  id: string;
  createFormObject: string = "create";



  userList: Observable<any>;
  constructor(private serviceObj: UsersServiceService, private router: Router) { }

  ngOnInit(): void {
    // this.userList=this.serviceObj.getUsers();
    this.showAllUsers();
  }

  showDetails(id) {
    this.router.navigate(['manage', id]);
  }
  showAllUsers() {
    this.serviceObj.getUsers()
      .subscribe(
        (result) => {
          this.userList = result as any;
          console.log("All users API" + result);
        },
        (error) => {
          console.log("Error API" + error);
        },
        () => {
          console.log("Completed API")
        }
      );
  }
  editUser(userId) {
    console.log("in manage module");
    // this.router.navigate(['manage', id]);
    this.router.navigate(['manage/edit/', userId]);
  }
  createUser() {
    console.log("In CreateUser");
    this.router.navigate(['manage/create']);
  }


}
export interface User {
  id?: string;
  firstName: string;
  lastName: string;
  age: number;
  login: string;
  password: string;
  isDeleted?: boolean;
}
