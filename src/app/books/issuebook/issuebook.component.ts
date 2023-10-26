import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../services/bookservice.service';

@Component({
  selector: 'app-issuebook',
  templateUrl: './issuebook.component.html',
  styleUrls: ['./issuebook.component.css'],
})
export class IssuebookComponent implements OnInit {
  bookService: BookserviceService;

  fictionholder: {
    books: {
      imgSource: string;
      bookLabel: string;
    }[];
    holderTitle: string;
  };

  academicholder: {
    books: {
      imgSource: string;
      bookLabel: string;
    }[];
    holderTitle: string;
  };

  displaylist: {
    books: {
      imgSource: string;
      bookLabel: string;
    }[];
    holderTitle: string;
  }[];

  constructor(bookService: BookserviceService) 
  {
    this.bookService = bookService;
    this.fictionholder =  {
      books: bookService.getFictionbucket(),
      holderTitle: 'Top Fiction',
    };
    this.academicholder =  {
      books: bookService.getAcademicBucket(),
      holderTitle: 'Top Academics/Sciences',
    };

    this.displaylist = [this.fictionholder, this.academicholder];
  }
  ngOnInit(): void {
    console.log(this.bookService.getFictionbucket());
  }


  issueBook(element: any) {
    alert(element.bookLabel);
  }
}
