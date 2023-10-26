import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../services/bookservice.service';

@Component({
  selector: 'app-returnedbooks',
  templateUrl: './returnedbooks.component.html',
  styleUrls: ['./returnedbooks.component.css']
})
export class ReturnedbooksComponent implements OnInit
{
 info: any
  constructor(private bookservice: BookserviceService)
  {

  }

  ngOnInit(): void {
    this.bookservice.getBooks().subscribe(data=>
      {
        this.info=data;
        console.log(this.info);
      })

  }
}
