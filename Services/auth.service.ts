import { Injectable } from '@angular/core';
import { SignInDoctorInfo } from '../interfaces/SignIn';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DoctorInfo } from '../interfaces/DoctorInfo';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl:string="https://localhost:7096/api/v1/Doctor";


  constructor( private http: HttpClient) { }
  private signIn(userData: SignInDoctorInfo){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      Authorization: 'my-auth-token',
      'Access-Control': 'Allow-Origin',
      observe:  'response',
    })
  };
public login(loginRequest: SignInDoctorInfo):Observable<DoctorInfo> {
  
  console.log(loginRequest);
  
    return this.http.post<DoctorInfo>(this.baseUrl,JSON.stringify(loginRequest) ,this.httpOptions);
  }

  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }
  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
}
}
