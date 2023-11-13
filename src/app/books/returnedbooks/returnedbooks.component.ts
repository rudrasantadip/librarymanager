import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../services/bookservice.service';

@Component({
  selector: 'app-returnedbooks',
  templateUrl: './returnedbooks.component.html',
  styleUrls: ['./returnedbooks.component.css']
})
export class ReturnedbooksComponent implements OnInit
{
  constructor(private bookservice: BookserviceService)
  {

  }

  ngOnInit(): void {
   

  }
}
