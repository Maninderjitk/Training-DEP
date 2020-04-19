import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from 'src/app/users-service.service';
import { Router } from '@angular/router';
import { User } from 'src/app/manage/user-manage/user-manage.component';
import { Observable } from 'rxjs';
import { Constant } from 'src/app/constant';


@Component({
  selector: 'app-user-active',
  templateUrl: './user-active.component.html',
  styleUrls: ['./user-active.component.css']
})
export class UserActiveComponent implements OnInit {
  userList: Observable<any>;
  updateUser;
  globalConst;

  constructor(private serviceObj: UsersServiceService, private router: Router) { }

  ngOnInit(): void {
    this,this.globalConst=Constant;
    this.userList = this.serviceObj.getUsers();
  }
  update(userID) {
    console.log("in update method");
    this.serviceObj.updateUser({
      id: userID,
      isDeleted: true
    })
      .subscribe(
        (result) => {
          this.updateUser = result as any;
          console.log("Update API" + this.updateUser);
        }
      );
  }
}
