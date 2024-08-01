import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { IUser } from '../interfaces/user';
import { firstValueFrom } from 'rxjs';

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
        return response;
      }));
  };

  async login(userData: {username: String, password:string}): Promise<IUser> {
        const observable: Observable<IUser> = this.http.post<any>(`${this.authUrl}/login`, userData)
          .pipe(map(response => {
            return response;
          }));
        
        return firstValueFrom(observable);
      }
  
  async getUsers(): Promise<IUser[]> {
    const observable: Observable<IUser[]> = this.http.get<IUser[]>(`${this.authUrl}/all-users`)
      .pipe(map(response => {
        return response;
      }));
    
    return firstValueFrom(observable);
  }
}

async function sleep(ms:number) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  })
}