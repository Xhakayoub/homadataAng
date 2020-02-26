import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request } from './app.model'

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
  postForm(request: Request): Observable<Request> {
    const baseUrl = 'http://127.0.0.1:3000/';
    return this.http.post<Request>(`${baseUrl}toto`, request);
  }
}
