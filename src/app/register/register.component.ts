import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { RegistrationserviceService } from '../authentication/registrationservice.service';
import { authResponse } from '../models/apiresponse';
import { Subject, catchError, of, throwError } from 'rxjs';
import { error } from 'jquery';
import { HttpErrorResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent
 {
  loader1 = 'loader1';
  error$: Subject<string> = new Subject<string>;
  getError$=this.error$.asObservable()

  responseData!: authResponse 

  constructor(
    private router: Router,
    private ngxService: NgxUiLoaderService,
    private authService: RegistrationserviceService,
    private cookieService:CookieService
  ) {}
  formData = {
    userName: '',
    password: '',
    email: '',
  };

  onSubmit() {
    if (
      this.formData.userName == '' ||
      this.formData.password == '' ||
      this.formData.email == ''
    ) {
      alert('Please Insert Values in all the fields');
    } else {
      if (!this.authService.isPasswordValid(this.formData.password)) {
        alert(
          'Follow the valid password pattern -> (a-z) (A-Z) (0-9) (!,@,#,$,%,^,&,*,)'
        );
      } else if (!this.authService.isUsernameValid(this.formData.userName)) {
        alert(
          'User name must be atleast 4 characters long and have both numbers and characters'
        );
      } else {
        this.authService
          .register(this.formData)
          .pipe()
          .subscribe((response: authResponse) => {
            if(response.message=='existing user')
            {
              alert('user name or email already exists')
            }
            else if(response.message='registration successfull')
            {
              let expiration_date = new Date();
              expiration_date.setDate(expiration_date.getDate()+30);
              this.cookieService.set('accessToken',response.accessToken,expiration_date); 
              console.log(this.cookieService.get('accessToken')); 
              this.router.navigate(['/login']);
            }
          }
          );
      }
    }
  }
}
