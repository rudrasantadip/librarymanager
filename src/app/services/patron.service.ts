import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patron } from '../models/apiresponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatronService 
{

  constructor(private http:HttpClient) 
  {

  }
  apiUrl:string="http://localhost:8080/patron";

  getPatronByCard(cardNumber:string):Observable<Patron>
  {
    return this.http.get<Patron>(`${this.apiUrl}/getPatronbyCard?card_number=${encodeURI(cardNumber)}`)
  }
}
