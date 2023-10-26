import { Injectable } from '@angular/core';
import { fictionbookdata } from '../issuebook/fictionbookdata';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService
{
  constructor(private http:HttpClient) { }

  fictionBucket = [
  {
    imgSource:'https://www.pluggedin.com/wp-content/uploads/2020/01/life-of-pi-a-novel-cover-686x1024.jpg',
    bookLabel:'The life of pi'
  },
  {
    imgSource:'https://m.media-amazon.com/images/I/71u-cpucTRL._AC_UF1000,1000_QL80_.jpg',
    bookLabel:'Harry Potter'
  },
  {
    imgSource:'https://m.media-amazon.com/images/I/71DAQuN7jhL._AC_UF1000,1000_QL80_.jpg',
    bookLabel:'Da Vinci Code'
  },
  {
    imgSource:'https://m.media-amazon.com/images/I/81RUfP0ZOjL._AC_UF1000,1000_QL80_.jpg',
    bookLabel:'The Kite Runner'
  },
  {
    imgSource:'https://m.media-amazon.com/images/I/71H1acpbGaL._AC_UF1000,1000_QL80_.jpg',
    bookLabel:'Angels &  Demons'
  },
  {
    imgSource:'https://m.media-amazon.com/images/I/51-tQES1KvL.jpg',
    bookLabel:"Lucifer's bride"
  },
  {
    imgSource:'https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781529094626.jpg',
    bookLabel:"Western Lane"
  },
  {
    imgSource:'https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781529074529.jpg',
    bookLabel:"Trust"
  },
  {
    imgSource:'https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781529083170.jpg',
    bookLabel:"Everything's fine"
  },];

  academictopdata =
[
    {
        imgSource:'https://m.media-amazon.com/images/I/61FFy7LP6FL._AC_UF1000,1000_QL80_.jpg',
        bookLabel:'Concepts of Physics'
      },
      {
        imgSource:'https://5.imimg.com/data5/SELLER/Default/2023/2/NB/AN/SK/162479673/a-brief-history-of-time.jpg',
        bookLabel:'Brief History of Time'
      },
      {
        imgSource:'https://m.media-amazon.com/images/I/91Lp-IyJZ+L._AC_UF1000,1000_QL80_.jpg',
        bookLabel:'The Grand Design'
      },
      {
        imgSource:'https://m.media-amazon.com/images/I/81RUfP0ZOjL._AC_UF1000,1000_QL80_.jpg',
        bookLabel:'The Math Book'
      },
      {
        imgSource:'https://m.media-amazon.com/images/I/91a+Vjfq5dL._AC_UF1000,1000_QL80_.jpg',
        bookLabel:'Cell Biology'
      },
      {
        imgSource:'https://cdn.kobo.com/book-images/d4a168a7-2546-4fc1-9653-bc8e8deffa2a/1200/1200/False/atom-and-molecules-chemistry-book-grade-4-children-s-chemistry-books.jpg',
        bookLabel:"Atoms & Molecules"
      },
      {
        imgSource:'https://m.media-amazon.com/images/I/61mbFI1Pi3L._AC_UF1000,1000_QL80_.jpg',
        bookLabel:"CSIR Net Organic Chemistry"
      },
      {
        imgSource:'https://m.media-amazon.com/images/I/A1J1u-50FML._AC_UF1000,1000_QL80_.jpg',
        bookLabel:"RD Sharma XI"
      },
      {
        imgSource:'https://4.imimg.com/data4/VK/VX/MY-3291959/r-d-sharma-maths-for-12th-std-cbse-500x500.jpg',
        bookLabel:"RD Sharma XII"
      },
]

  issuedBooks = 
  [
    {
      bookLabel: "https://m.media-amazon.com/images/I/91Lp-IyJZ+L._AC_UF1000,1000_QL80_.jpg",
      author: "Dan Brown",
      genre: "Thrill/Fiction",
      issueDate: "2023-10-01",
      returnedDate: "2023-10-15"
    },
    {
      bookLabel: "https://m.media-amazon.com/images/I/71u-cpucTRL._AC_UF1000,1000_QL80_.jpg",
      author: "J K Rowling",
      genre: "Kids/Fiction",
      issueDate: "2023-10-02",
      returnedDate: "2023-10-16"
    },
    {
      bookLabel: "https://rukminim2.flixcart.com/image/850/1000/kpsnzww0/regionalbooks/u/o/t/concepts-of-physics-class-11-original-imag3yyfrxuayyzb.jpeg?q=20",
      author: "H C Verma",
      genre: "Physics/Education",
      issueDate: "2023-10-09",
      returnedDate: "2023-10-23"
  }
  ]
  
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

  getBooks():Observable<any>
  {
    return this.http.get('http://localhost:8080/getBooks');
  }
}
