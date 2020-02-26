
import { Component, OnInit } from '@angular/core';
import { CallFunctionService } from './call-function.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 
  title = 'appAng';
  result = "";
  test = "ayoub";
  form: FormGroup;
  constructor(private _callFunctionService: CallFunctionService,
    private fb: FormBuilder){}

  
  ngOnInit(): void{
    // this.test = "ayoub";
    // this._callFunctionService.getResult().
    // subscribe(
    //   data=>{
    //     this.result = data;
    //   }
    // );


    this._buildForm();

  }

  private _buildForm() {
    const fb = this.fb;
    this.form = fb.group({
      price: [null],
      area: [null],
      numberOfRooms: [null],
      type: [null],
      status: [null]
    });
  }

  postForm() {
    this._callFunctionService.postForm(this.form.value).subscribe({
      next: (data) => console.log(data)
    });
  }
}
