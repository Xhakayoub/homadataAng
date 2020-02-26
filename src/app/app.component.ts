
import { Component, OnInit } from '@angular/core';
import { CallFunctionService } from './call-function.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 
  title = 'appAng';
  result = "";
  test = "ayoub"; 
  constructor(private _callFunctionService: CallFunctionService){}

  
  ngOnInit(){
    this.test = "ayoub";
    this._callFunctionService.getResult().
    subscribe(
      data=>{
        this.result = data;
      }
    );

  }
}
