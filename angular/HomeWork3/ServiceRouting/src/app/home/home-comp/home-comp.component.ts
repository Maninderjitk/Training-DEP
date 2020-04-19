import { Component, OnInit } from '@angular/core';
import {Constant} from '../../constant';

@Component({
  selector: 'app-home-comp',
  templateUrl: './home-comp.component.html',
  styleUrls: ['./home-comp.component.css']
})
export class HomeCompComponent implements OnInit {
  globalConst;
  constructor() { }

  ngOnInit(): void {
    this.globalConst=Constant;
  }

}
