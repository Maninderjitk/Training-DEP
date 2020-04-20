import { Component } from '@angular/core';
import {Constant} from './constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ServiceRouting';
  globalConst;

  ngOnInit(){
    this.globalConst=Constant;
  }

}