import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = 'http://localhost:5000/api/auth';

  constructor(private http: HttpClient) {
    
  }

  register(body:IUser): Observable<any> {
    return this.http.post<any>(`${this.authUrl}/sign-up`, body)
      .pipe(map(response => {
        console.log('Response', response)
        return response;
      }));
  };

  login(userData: {username: String, password:string}): Observable<any> {
    return this.http.post<any>(`${this.authUrl}/login`, userData)
      .pipe(map(response => {
        console.log('Response', response)
        return response;
      }));
  }
}
