import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BookserviceService } from '../services/bookservice.service';
import { issuedBooksData } from './issuedBooksData';

@Component({
  selector: 'app-issuedbooks',
  templateUrl: './issuedbooks.component.html',
  styleUrls: ['./issuedbooks.component.css'],
})
export class IssuedbooksComponent implements OnInit
 {
   dtOptions: DataTables.Settings = {};
   dashTitle = 'Book List';
   issued_books_data: { bookLabel: string; author: string; genre: string; issueDate: string; returnedDate: string; }[] | undefined;
   bookservice : BookserviceService
  


  constructor(bookservice: BookserviceService) 
  {
    this.bookservice=bookservice;
  }

  ngOnInit(): void 
  {
    this.issued_books_data = this.bookservice.getIssuedBookBucket();
    this.dtOptions = {
      pagingType: 'full_numbers',
    };
  }
}
