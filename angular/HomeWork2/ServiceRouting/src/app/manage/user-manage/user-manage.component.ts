import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from 'src/app/users-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.css']
})
export class UserManageComponent implements OnInit {

  userList=[];
  constructor(private serviceObj:UsersServiceService ,private router:Router) { }
  
  ngOnInit(): void {
    this.userList=this.serviceObj.users;}

    showDetails(id){
      this.router.navigate(['manage', id]);
    }

}
