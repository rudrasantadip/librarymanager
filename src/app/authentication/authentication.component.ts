import { Component } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent
{
  cards = [
    {
      cardClass:'link-item-card',
      iconClass:'fa-brands fa-google',
      cardLabel:'Google Signin'
    },
    {
      cardClass:'link-item-card',
      iconClass:'fa-brands fa-apple',
      cardLabel:'Apple Signin'
    },
    {
      cardClass:'link-item-card',
      iconClass:'fa-solid fa-k',
      cardLabel:'Kindle Signin'
    },
  ]
}
