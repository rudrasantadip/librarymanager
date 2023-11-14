import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookserviceService } from 'src/app/books/services/bookservice.service';
import { Book } from 'src/app/models/books/book';
@Component({
  selector: 'app-removebook',
  templateUrl: './removebook.component.html',
  styleUrls: ['./removebook.component.css']
})
export class RemovebookComponent 
{
  booklist!:Book[]
  choiceActive:boolean=false;
  popupTitle!:string
  isbn!:string
  size!:number
  
 
  
  
  
  
  // bookTable: DataTables.Settings={};
  
  constructor(private bookService:BookserviceService,private router:Router)
  {
    this.bookService.getAllBooks().subscribe(
      (books)=>
      {
        this.booklist=books;
        this.size=this.booklist.length;
      }
    )
  }


  removeBook(book:Book)
  {
    this.choiceActive=!this.choiceActive;
    this.popupTitle=book.bookTitle;
    this.isbn=book.isbn
  }

  proceed()
  {
    this.bookService.removeBook(this.isbn).subscribe(
      (data:string)=>
      {
        alert(`${data} has been removed`)
        window.location.reload();
      }
      )
    this.choiceActive=!this.choiceActive;
  }

  cancle()
  {
    this.choiceActive=!this.choiceActive;
  }

}
