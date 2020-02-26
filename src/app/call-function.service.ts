import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallFunctionService {

  constructor(private http: HttpClient) { }

  getResult() {
  return this.http.get(
    "http://127.0.0.1:3000/api/",
    {responseType: 'text'}
    );
  }
}
