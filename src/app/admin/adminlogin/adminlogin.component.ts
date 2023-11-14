import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationserviceService } from 'src/app/authentication/registrationservice.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent
{

  constructor(private router:Router, private authService:RegistrationserviceService)
  {

  }

  formData=
  {
    userId:'',
    password:''
  }

  onSubmit()
  {
    if((this.authService.isUsernameValid(this.formData.userId)) && (this.authService.isPasswordValid(this.formData.password)))
    {
      console.log(this.formData.userId);
      console.log(this.formData.password);
      this.router.navigate(['admin/home'])
    }
    else
    {
      alert('Provide data in all the fields')
    }
  }
}
