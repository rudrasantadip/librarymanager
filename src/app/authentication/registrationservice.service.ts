import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, catchError, of, shareReplay, throwError } from 'rxjs';
import { Patron, authResponse } from '../models/apiresponse';

@Injectable({
  providedIn: 'root'
})
export class RegistrationserviceService 
{

  constructor(private http: HttpClient) { }
  private url = 'http://localhost:8080';
  errormessage:string=''


  register(data:any): Observable<authResponse>
  {
    return this.http.post<authResponse>(`${this.url}/auth/register`,data)
    
  }


  login(username:string,password:string): Observable<authResponse>
  {
    let params = new HttpParams();
    params = params.set('username',username);
    params=params.set('password',password);
    return this.http.get<authResponse>(`${this.url}/auth/login`,{params:params}).pipe(shareReplay(1));
  }

  getpatron(accesstoken:string):Observable<Patron>
  {
    let params = new HttpParams();
    params=params.set('access_token',accesstoken);
    return this.http.get<Patron>(`${this.url}/patron/getPatron`,{params:params});
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

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0)
    {
      console.log(error.error)
    }
    else if (error.status===400)
    {
     this.errormessage=error.message
      console.log(this.errormessage)
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Server Error'));
  }
}
