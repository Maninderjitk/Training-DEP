import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from 'src/app/users-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ConcatPipe } from 'src/app/concat.pipe';
import { Constant } from 'src/app/constant';

@Component({
  selector: 'app-lazy-loaded',
  templateUrl: './lazy-loaded.component.html',
  styleUrls: ['./lazy-loaded.component.css'],

})
export class LazyLoadedComponent implements OnInit {
  user: any;
  userList: Observable<any>;
  globalConst;

  constructor(private serviceObj: UsersServiceService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.globalConst=Constant;
    const idParam = +this.router.snapshot.params['id'];
    this.user = this.serviceObj.users.find((u) => u.id === idParam);
    // this.showAllUsers();
    this.router.params.subscribe(
      (param) => {
        this.serviceObj.getUser(param['id']).subscribe(
          (user) => {
            this.user = user as any;
            console.log("user API" + this.user);
          }
        );
        console.log("in PARAm subscribe");
      }
    );
  }


}
