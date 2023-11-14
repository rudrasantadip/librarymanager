import { Component, OnDestroy, OnInit } from '@angular/core';
import { RegistrationserviceService } from '../authentication/registrationservice.service';
import { Router } from '@angular/router';
import { Credentials, authResponse } from '../models/apiresponse';
import { CredshareService } from '../services/credshare.service';
import { Subscription } from 'rxjs';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit,OnDestroy
 {
  subscription!:Subscription

  

 

  private responseData!: authResponse;  


  formData = {
    username: '',
    password: '',
  };

  constructor(
    private authService: RegistrationserviceService,
    private router: Router,
    private cookieService:CookieService,
    private credShare:CredshareService
   )
    {
    }

    token:string=''
  ngOnInit(): void 
  {
    if(this.token!='')
    {
      this.router.navigate(["/dashboard"]);
    }

  }

  onSubmit() 
  {
    if (this.formData.username == '' || this.formData.password == '') {
      alert('Insert data in all the fields');
    }
    else
    {
      if (!this.authService.isPasswordValid(this.formData.password))
      {
        alert(
          'Follow the valid password pattern -> (a-z) (A-Z) (0-9) (!,@,#,$,%,^,&,*,)'
        );
      }
      else if(!this.authService.isUsernameValid(this.formData.username) || this.formData.username.length<4)
      {
        alert('User name must be atleast 4 characters long and have both numbers and characters')
      }
      else 
       {
        // Login api call
        this.subscription=this.authService
          .login(this.formData.username, this.formData.password)
          .subscribe((response: authResponse) => {
            this.responseData = response;
            if(this.responseData.message=='non existing user')
            {
              alert('Invalid Credentials')
            }
            else if(this.responseData.message=='invalid format')
            {
              alert('Improper pattern in User Name and Password')
            }
            else if(this.responseData.message=='login successfull')
            { 
             const expiry = new Date();
             expiry.setDate(expiry.getDate()+30); 
            this.cookieService.set('isLoggedIn','true',expiry);
            this.cookieService.set("accessToken",response.accessToken,expiry);
            this.credShare.updateCredentials({accessToken:this.cookieService.get('accessToken'),isLoggedin:'true'})
            this.router.navigate(['/dashboard']);
            }
          });
      }
    }
  }

  ngOnDestroy(): void
  {
    // if(this.subscription)
    // {
    //   this.subscription.unsubscribe();
    // }
  }
}
