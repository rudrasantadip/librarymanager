import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService , SPINNER} from 'ngx-ui-loader';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent 
{
  constructor(private router:Router,private ngxService: NgxUiLoaderService)
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
      this.ngxService.start(); 
      setTimeout(()=>{
        this.ngxService.stop();
        this.router.navigate(["/login",this.formData]);  
      },2000)
    }
  }
}
