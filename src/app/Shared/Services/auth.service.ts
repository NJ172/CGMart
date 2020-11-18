import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpInterceptor } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import 'rxjs/operators';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient, private router : Router) { }
  getUserDetails(email, password){
    return this.http.post<HttpResponse<any>>('http://localhost:3001/api/auth',
    {email, password}, { observe: 'response' })
      .pipe(map((response : HttpResponse<any>) => {
        if(response){
          localStorage.setItem('token', response.headers.get('x-auth-token'));
          return true;
        }
        return false;
      }))
  }
  saveUserCredentials(email, password){
    localStorage.setItem('email', btoa(email));
    localStorage.setItem('password', btoa(password));
  }
  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['login'])
  }
  get currentUser(){
    let token = localStorage.getItem('token');
    if(!token) return null;

    const jwtHelper = new JwtHelperService();
    return jwtHelper.decodeToken(token);
  }
  
}
