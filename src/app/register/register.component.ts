import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService , SPINNER} from 'ngx-ui-loader';
import { RegistrationserviceService } from '../authentication/registrationservice.service';
import { apiResponse } from '../models/apiresponse';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent 
{
  loader1="loader1";

  constructor(private router:Router,private ngxService: NgxUiLoaderService, private authService:RegistrationserviceService)
  {

  }
  formData = 
  {
    userName:'',
    email:'',
    password:''
  }

  onSubmit()
  {
    if(this.formData.userName=='' || this.formData.email=='' || this.formData.password=='')
    {
      alert("Please Insert Values in all the fields")
    }
    else
    {
    if(!this.authService.isPasswordValid(this.formData.password))
    {
      alert("Follow the valid password pattern -> (a-z) (A-Z) (0-9) (!,@,#,$,%,^,&,*,)")
    }
    else if(!this.authService.isUsernameValid(this.formData.userName))
    {
      alert('User name must be atleast 4 characters long and have both numbers and characters')
    }
    else
    {
      this.authService.register(this.formData).subscribe(
        (response:apiResponse)=>
        {
          console.log(response);
          this.router.navigate(['/login']);
        }
      )
    }
    }
    
  }
}
