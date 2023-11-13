import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CredshareService } from '../services/credshare.service';

export const dashGuard: CanActivateFn = (route, state) => 
{
  let authService = inject(CredshareService);
  let router = inject(Router);
  let accesstoken=''
  authService.getCredentials().subscribe((data)=>
  {
    accesstoken=data.accessToken;
  })

  if(accesstoken=='')
  {
    router.navigate(["/dashboard"])
    return true;
  }
  else
  {
    return false
  }
};
