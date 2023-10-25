import { Component } from '@angular/core';

@Component({
  selector: 'app-profileservices',
  templateUrl: './profileservices.component.html',
  styleUrls: ['./profileservices.component.css']
})
export class ProfileservicesComponent
{
  buttons=[
    {
      label:'View Membership Details',
      class:'btn btn-light'
    },
    {
      label:'Extend Membership',
      class:'btn btn-light'
    },
    {
      label:'Cancle Membership',
      class:'btn btn-danger'
    },
    {
      label:'Report Exposed Credentials',
      class:'btn btn-danger'
    },
    {
      label:'Customer Support',
      class:'btn btn-light'
    }
  ]

}
