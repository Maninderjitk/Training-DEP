// import { Injectable } from '@angular/core';
import { Injectable, EventEmitter } from '@angular/core';

import { HttpClient, HttpEventType } from '@angular/common/http';
import { User } from './manage/user-manage/user-manage.component';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  login: string;
  password: string;
  isDeleted: boolean;

  users=[
      { id:1, firstName: 'one',lastName: 'user',age: 10, login:'oneUser', password:'1', isDeleted:true},
      { id:2, firstName: 'two',lastName: 'user',age: 20, login:'twoUser', password:'2', isDeleted:false},
      { id:3, firstName: 'three',lastName: 'user',age: 30, login:'threeUser', password:'3', isDeleted:true},
      { id:4, firstName: 'four',lastName: 'user',age: 40, login:'fourUser', password:'4', isDeleted:false},
      { id:5, firstName: 'five',lastName: 'user',age: 50, login:'fiveUser', password:'5', isDeleted:true},
      { id:6, firstName: 'six',lastName: 'user',age: 60, login:'sixUser', password:'6', isDeleted:false},
      { id:7, firstName: 'seven',lastName: 'user',age: 70, login:'sixUser', password:'6', isDeleted:false},
      { id:8, firstName: 'eight',lastName: 'user',age: 80, login:'sixUser', password:'6', isDeleted:false}
  ]
  
  constructor(private http: HttpClient) { }
  getUsers() {
    return this.http.get<any[]>('http://localhost:8080/users');
  }

  getUser(id: string) {
    return this.http.get('http://localhost:8080/users/'+ id);
  }
  updateUser(user: Partial<User>) {
    return this.http.put('http://localhost:8080/users/' + user.id, {
      password: user.password,
      age: user.age,
      isDeleted: user.isDeleted
    });
 }
  createUser(user: User) {
    return this.http.post('http://localhost:8080/users', user);
  }
}
