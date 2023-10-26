import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent
{
  constructor(private router:Router)
  {

  }

  issuedBook()
  {
    this.router.navigate(['/issuedbooks']);
  }

  returnBook()
  {
    this.router.navigate(['/returnedbooks']);;
  }

  issueBook()
  {
    this.router.navigate(['/issuebook']);
  }


  accessed_by:string="Santadip's";
  no_of_books=5
}
