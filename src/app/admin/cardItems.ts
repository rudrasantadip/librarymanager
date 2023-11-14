import { CardModel } from "./adminhome/adminhome.component";

export let cardItems:CardModel[]


cardItems=
[
    {
        image:'https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/books_blue_add.png',
        title:'Add Books',
        description:' New Books Added to the library are to be uploaded to the database',
        routerLink:'/admin/addbooks'
    },
    {
        image:'https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/book_blue_delete.png',
        title:'Remove Books',
        description:' Unavailable Books in the  library are to be marked as unavailable in the database',
        routerLink:'/admin/removebooks'
    },
    {
        image:'https://cdn.iconscout.com/icon/premium/png-256-thumb/book-issue-3763166-3139247.png?f=webp',
        title:'Issue Requests',
        description:'Requests for books/journals made by members will be approved here',
        routerLink:'/home'
    },
    {
        image:'https://cdn.iconscout.com/icon/premium/png-256-thumb/user-management-2410699-2024637.png',
        title:'Manage Users',
        description:'View available users and manage their activities & Subscriptions',
        routerLink:'/home'
    }
]