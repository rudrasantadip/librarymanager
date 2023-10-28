import { Component, OnDestroy } from '@angular/core';
import { RegistrationserviceService } from '../authentication/registrationservice.service';
import { Router } from '@angular/router';
import { Credentials, apiResponse } from '../models/apiresponse';
import { CredshareService } from '../services/credshare.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnDestroy
 {
  subscription!:Subscription

  constructor(
    private authService: RegistrationserviceService,
    private router: Router,
    private shareCred:CredshareService) {}

 


  private responseData!: apiResponse;

  private credentials: Credentials = {
    accesstoken:''
  };

  formData = {
    username: '',
    password: '',
  };

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
          .subscribe((response: apiResponse) => {
            this.responseData = response;
            this.credentials.accesstoken = this.responseData.accesstoken;
            console.log(this.credentials);
            this.shareCred.updateCredentials(this.credentials);
            this.router.navigate(['/dashboard']);
          });
      }
    }
  }

  ngOnDestroy(): void
  {
    if(this.subscription)
    {
      this.subscription.unsubscribe();
    }
  }
}
