import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BookserviceService } from 'src/app/books/services/bookservice.service';
import { Book } from 'src/app/models/books/book';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-removebook',
  templateUrl: './removebook.component.html',
  styleUrls: ['./removebook.component.css']
})
export class RemovebookComponent implements AfterViewInit
{
  booklist:Book[]=[]
  choiceActive:boolean=false;
  popupTitle!:string
  isbn!:string
  size!:number
  dtOptions:DataTables.Settings={}
  dtTrigger:Subject<any>=new Subject<any>


 
  
  
  
  

  
  constructor(private bookService:BookserviceService,private router:Router)
  {
    this.dtOptions=
    {
      pagingType:'full_numbers',
      pageLength:5,
    }



    this.bookService.getAllBooks().subscribe(
      (books)=>
      {
        this.booklist=books;
        this.size=this.booklist.length;
        this.dtTrigger.next(null);
      }
      )
  }

  ngAfterViewInit() {
   
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
