import { Component, OnInit } from '@angular/core';
import { RegistrationserviceService } from 'src/app/authentication/registrationservice.service';
import { Credentials, apiResponse } from 'src/app/models/apiresponse';
import { CredshareService } from 'src/app/services/credshare.service';

@Component({
  selector: 'app-profilebody',
  templateUrl: './profilebody.component.html',
  styleUrls: ['./profilebody.component.css'],
})
export class ProfilebodyComponent implements OnInit
{

  responseData: apiResponse={
    message: '',
    accesstoken:'',
    timestamp: '',
    status: false,
    patron: {
      patronId: 0,
      fullName: '',
      contactNumber: '',
      dob: '',
      gender: '',
      userName: '',
      email: '',
      password: '',
      cardNumber: '',
      cardValidity: '',
      cardType:'',
      accesstoken:''
    } 
  };

  patronName!: string;
  icon!:string
  sharedCredentials: Credentials = { accesstoken:'' };

  constructor(
    private credservice: CredshareService,
    private authservice: RegistrationserviceService
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

  ngOnInit(): void {
    this.credservice.getCredentials().subscribe((data) => {
      this.sharedCredentials = data;
      console.log(this.sharedCredentials.accesstoken)

      this.authservice.getpatron(this.sharedCredentials.accesstoken).subscribe(
        (response:apiResponse)=>
        {
            this.responseData=response;
            console.log(this.responseData);
            this.patronName =this.responseData.patron.email;
            if(this.patronName=='')
            {
              this.patronName="User"
            }
            this.patronName=this.trimemail(this.patronName);
            this.icon = this.patronName.charAt(0).toLocaleUpperCase();
        }
      )
    });

  }

  
}
