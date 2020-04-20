import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from 'src/app/users-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-deleted',
  templateUrl: './user-deleted.component.html',
  styleUrls: ['./user-deleted.component.css']
})
export class UserDeletedComponent implements OnInit {

  userList=[];
  constructor(private serviceObj:UsersServiceService ,private router:Router) { }
  
  ngOnInit(): void {
    this.userList=this.serviceObj.users;}

}
