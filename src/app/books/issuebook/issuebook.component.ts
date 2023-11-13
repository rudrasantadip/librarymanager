import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../services/bookservice.service';
import { Book } from 'src/app/models/books/book';

@Component({
  selector: 'app-issuebook',
  templateUrl: './issuebook.component.html',
  styleUrls: ['./issuebook.component.css'],
})
export class IssuebookComponent implements OnInit {
  bookService: BookserviceService;

  books! : Book[] 

  fictionholder!: {
    books: Book[];
    holderTitle: string;
  };

  academicholder!: {
    books: Book[];
    holderTitle: string;
  };

  displaylist!: {
    books: Book[];
    holderTitle: string;
  }[];

  constructor(bookService: BookserviceService) 
  {
    this.bookService = bookService;
    
  }
  ngOnInit(): void 
  {
    this.bookService.getAllBooks().subscribe(
      (data)=>
      {
        this.books=data;
        this.fictionholder =  {
          books: this.books,
          holderTitle: 'Top Fiction',
        };
        this.academicholder =  {
          books: this.books,
          holderTitle: 'Top Academics/Sciences',
        };
        this.displaylist = [this.fictionholder, this.academicholder];
      }
    )
  }


  issueBook(element: any) {
    alert(element.bookTitle);
  }
}
