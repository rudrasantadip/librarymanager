import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Credentials } from '../models/apiresponse';

@Injectable({
  providedIn: 'root'
})
export class CredshareService
{
  private credentials = new BehaviorSubject<Credentials> (
  {
    accessToken:'',
    isLoggedin:'false'
  });

  currentData = this.credentials.asObservable();

  constructor() { }

  getCredentials() : Observable<Credentials>
  {
    return this.currentData;
  }

  updateCredentials(newCredentials : Credentials)
  {
    this.credentials.next(newCredentials);
  }
}
