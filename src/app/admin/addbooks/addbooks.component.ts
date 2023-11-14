import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookserviceService } from 'src/app/books/services/bookservice.service';
import { Book } from 'src/app/models/books/book';

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css']
})
export class AddbooksComponent 
{

  constructor(private bookService:BookserviceService, private router:Router)
  {

  }



  formData:Book=
  {
    isbn:'',
    bookImg:'',
    bookAuthor:'',
    bookGenre:'',
    bookTitle:'',
    publisher:''
  }

  book!:Book

  addBook()
  {
    if(this.formData.isbn=='' || this.formData.bookTitle==''|| this.formData.bookImg=='' || this.formData.bookAuthor=='' ||this.formData.bookGenre==''||this.formData.publisher=='')
    {
      alert('Please fill up all the fields')
    }
    else
    {
      this.bookService.addBook(this.formData).subscribe(
        (response:Book)=>
        {
          this.book=response;
          alert(`${this.book.isbn} has been added`);
          window.location.reload();
        }
      )
    }
  }
}
