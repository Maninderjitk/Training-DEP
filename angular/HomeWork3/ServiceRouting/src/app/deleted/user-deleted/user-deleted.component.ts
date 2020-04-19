import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from 'src/app/users-service.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Constant } from 'src/app/constant';

@Component({
  selector: 'app-user-deleted',
  templateUrl: './user-deleted.component.html',
  styleUrls: ['./user-deleted.component.css']
})
export class UserDeletedComponent implements OnInit {

  userList: Observable<any>;
  updateUser;
  globalConst;

  constructor(private serviceObj: UsersServiceService, private router: Router) { }

  ngOnInit(): void {
    this.userList = this.serviceObj.getUsers();
    this.globalConst = Constant;
  }
  update(userID) {
    console.log("in update method");
    this.serviceObj.updateUser({
      id: userID,
      isDeleted: false
    })
      .subscribe(
        (result) => {
          this.updateUser = result as any;
          console.log("Update API" + this.updateUser);
        }
      );
  }
}
