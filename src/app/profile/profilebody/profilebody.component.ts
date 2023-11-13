import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { RegistrationserviceService } from 'src/app/authentication/registrationservice.service';
import { Credentials, Patron, authResponse } from 'src/app/models/apiresponse';
import { CredshareService } from 'src/app/services/credshare.service';

@Component({
  selector: 'app-profilebody',
  templateUrl: './profilebody.component.html',
  styleUrls: ['./profilebody.component.css'],
})
export class ProfilebodyComponent implements OnInit
{

  responseData: any

  patronName!: string;
  icon!:string
  token:string=''

  constructor(
    private credservice: CredshareService,
    private authservice: RegistrationserviceService,
    private cookieService:CookieService
  ) {
    this.patronName=''
  }

  trimemail(str:string):string
  {
    const index:number = str.indexOf('@');
    if(index!==-1)
    {
      str =str.substring(0,index);
    }
    return str;
  }

  ngOnInit(): void 
  {
    
      
      this.token=this.cookieService.get('accessToken');
      if(this.token!='')
      {
      this.authservice.getpatron(this.token).subscribe(
        (response:Patron)=>
        {
            this.responseData=response;
            this.patronName =this.responseData.logCredentials.email;
            if(this.patronName=='')
            {
              this.patronName="User"
            }
            this.patronName=this.trimemail(this.patronName);
            this.icon = this.patronName.charAt(0).toLocaleUpperCase();
        }
      )
      };
    

  }

  
}
