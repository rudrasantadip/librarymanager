import { Injectable, OnInit } from '@angular/core';
import { fictionbookdata } from '../issuebook/fictionbookdata';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Book} from 'src/app/models/books/book';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService implements OnInit
{
  constructor(private http:HttpClient) { }
 
  apiUrl:string="http://localhost:8080/books";
  allBooks!:Book[];
  fictionBucket = [];
  academictopdata =[];
  issuedBooks = []

  ngOnInit(): void
  {
   
  }

  getAllBooks() 
  {
   return this.http.get<Book[]>(`${this.apiUrl}/getBooks`)
  }


  getFictionbucket()
  {
    return this.fictionBucket;
  }

  getIssuedBookBucket()
  {
    return this.issuedBooks;
  }

  getAcademicBucket()
  {
    return this.academictopdata;
  }

}
