import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = environment.url
  constructor(private http:HttpClient) {}

  register(username:string, password:string){
    this.http.post(this.url + 'register-user',{username, password})
    .pipe(take(1))
    .subscribe(
      data => console.log('se registro un nuevo usuario', data)
    )
  }
}
