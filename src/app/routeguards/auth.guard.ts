import { Inject, Injectable, inject } from '@angular/core';
import { CanActivateFn, Route, Router } from '@angular/router';
import { CredshareService } from '../services/credshare.service';
import { Credentials } from '../models/apiresponse';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn:'root'
})
export class PermissionService {
  cookie_credentials: Credentials; // permanent token
  share_Credentials:Credentials // temporary token
  constructor( private cookieService:CookieService, private credShare:CredshareService) 
  {
    this.cookie_credentials =
    {
      accessToken: cookieService.get('accessToken'),
      isLoggedin: cookieService.get('isLoggedIn'),
    }

    this.share_Credentials=
    {
      accessToken:'',
      isLoggedin:''
    }
    // this.share_Credentials={accessToken:'',isLoggedin:''}


    this.credShare.getCredentials().subscribe((data)=>
    {
    this.share_Credentials.accessToken=data.accessToken,
    this.share_Credentials.isLoggedin=data.isLoggedin
    })




  }

  getShareCredentials(): Credentials {
    return this.share_Credentials;
  }

  getCookieCredentials(): Credentials
  {
    return this.cookie_credentials;
  }

  alertY()
  {
    alert("Access Denied! Login or Signup to Continue further")
  }
}

export const authGuard: CanActivateFn = (route, state) =>
{
  let permission:PermissionService=inject(PermissionService);
  let scred:Credentials =permission.getShareCredentials();
  let ccred:Credentials = permission.getCookieCredentials();
  let router = inject(Router);

  // console.log(scred);
  // console.log(ccred);
  // let flag:boolean=false
  if( scred.accessToken!='' || scred.isLoggedin=='true' || ccred.isLoggedin=='true')
  {
    return true;
  }
 else
 {
  if(ccred.accessToken!='')
  {
    return true
  }
  else
  {
    router.navigate(["/login"])
    return false;
  }
 }
};
