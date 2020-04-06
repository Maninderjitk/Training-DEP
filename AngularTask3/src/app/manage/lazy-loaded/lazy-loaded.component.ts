import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from 'src/app/users-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ConcatPipe } from 'src/app/concat.pipe';

@Component({
  selector: 'app-lazy-loaded',
  templateUrl: './lazy-loaded.component.html',
  styleUrls: ['./lazy-loaded.component.css'],
  
})
export class LazyLoadedComponent implements OnInit {
  user:any; 
  userList:Observable<any>;

  constructor(private serviceObj:UsersServiceService, private router:ActivatedRoute) { }
 
  ngOnInit(): void {
    const idParam = +this.router.snapshot.params['id'];
    this.user = this.serviceObj.users.find((u) => u.id === idParam);
    // this.showAllUsers();
    this.router.params.subscribe(
      (param) => {
      this.serviceObj.getUser(param['id']).subscribe(
        (user)=>{
          this.user=user as any;
          console.log("user API"+this.user);
        }
      );
        console.log("in PARAm subscribe");
      }
    );
  }
  // showAllUsers(){
  //   this.serviceObj.getUsers()
  //   .subscribe(
  //    (result)=>{
  //      this.userList=result as any;
  //      console.log("All users API"+result);
  //    },
  //    (error)=>{
  //      console.log("Error API"+ error);
  //    },
  //    ()=>{
  //      console.log("Completed API")
  //    }
  //   );
  // }

}
