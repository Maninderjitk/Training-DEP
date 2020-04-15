import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from 'src/app/users-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lazy-loaded',
  templateUrl: './lazy-loaded.component.html',
  styleUrls: ['./lazy-loaded.component.css']
})
export class LazyLoadedComponent implements OnInit {
  user: any;
  constructor(private serviceObject: UsersServiceService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    const idParam = +this.router.snapshot.params['id'];
    this.user = this.serviceObject.users.find((u) => u.id === idParam);

    this.router.params.subscribe(
      (param) => {
        this.user = this.serviceObject.users.find((u) => u.id === +param['id']);
        console.log(this.user.firstName);
      }
    );
  }

}
