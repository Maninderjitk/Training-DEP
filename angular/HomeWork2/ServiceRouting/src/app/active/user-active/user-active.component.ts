import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from 'src/app/users-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-active',
  templateUrl: './user-active.component.html',
  styleUrls: ['./user-active.component.css']
})
export class UserActiveComponent implements OnInit {
  userList = [];
  constructor(private serviceObj: UsersServiceService, private router: Router) { }

  ngOnInit(): void {
    this.userList = this.serviceObj.users;
  }

}
