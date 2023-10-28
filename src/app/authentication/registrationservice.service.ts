import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';
import { apiResponse } from '../models/apiresponse';

@Injectable({
  providedIn: 'root'
})
export class RegistrationserviceService 
{

  constructor(private http: HttpClient) { }
  private url = 'http://localhost:8080';


  register(data:any): Observable<apiResponse>
  {
    return this.http.post<apiResponse>(`${this.url}/auth/register`,data);
  }

  login(username:string,password:string): Observable<apiResponse>
  {
    let params = new HttpParams();
    params = params.set('username',username);
    params=params.set('password',password);
    return this.http.get<apiResponse>(`${this.url}/auth/login`,{params:params}).pipe(shareReplay(1));
  }

  getpatron(accesstoken:string):Observable<apiResponse>
  {
    let params = new HttpParams();
    params=params.set('accesstoken',accesstoken);
    return this.http.get<apiResponse>(`${this.url}/auth/getPatron`,{params:params});
  }

  isPasswordValid(password: string): boolean {
    // Define password validation criteria
    const minLength = 8; // Minimum password length
    const hasUppercase = /[A-Z]/.test(password); // At least one uppercase letter
    const hasLowercase = /[a-z]/.test(password); // At least one lowercase letter
    const hasDigit = /\d/.test(password); // At least one digit
    const hasSpecialCharacter = /[!@#$%^&*]/.test(password); // At least one special character
  
    // Check if the password meets all criteria
    const isLengthValid = password.length >= minLength;
    const isComplexityValid = hasUppercase && hasLowercase && hasDigit && hasSpecialCharacter;
  
    return isLengthValid && isComplexityValid;
  }

  isUsernameValid(username: string): boolean {
    const pattern = /^(?=.*[a-zA-Z])(?=.*\d).+$/;
    return pattern.test(username);

    // Use the test method to check if the username matches the pattern.
  }
}
