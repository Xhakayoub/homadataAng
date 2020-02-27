
import { Component, OnInit } from '@angular/core';
import { CallFunctionService } from './call-function.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 
 
  result = "";
  form: FormGroup;
  constructor(private _callFunctionService: CallFunctionService,
    private fb: FormBuilder){}

  
  ngOnInit(): void{
    this._buildForm();
}

  private _buildForm() {
    const fb = this.fb;
    this.form = fb.group({
      price: [null, Validators.required],
      area: [null, Validators.required],
      numberOfRooms: [null],
      type: [null],
      status: [null]
    });
  }

  postForm() {
    this._callFunctionService.postForm(this.form.value).subscribe({
      next: (data) => {this.result = data["data"];}
    });
  }
}
