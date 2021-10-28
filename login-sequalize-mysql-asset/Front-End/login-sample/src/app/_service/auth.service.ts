import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/';


const httpOptions = {
  headers: new HttpHeaders ({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
login(username: string, password: string ): Observable<any> {

  return this.http.post(AUTH_API+ 'auth/login',
  {
    username,
    password
  }, httpOptions);

}

register(firstName: string, lastName: string, email: string, username: string, phoneNumber: string, employee_Number: string, password: string): Observable<any> {
  return this.http.post(AUTH_API+'users', {
    firstName,
    lastName,
    email,
    phoneNumber,
    employee_Number,
    password}, httpOptions)
}

}
