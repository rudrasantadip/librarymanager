import { Timestamp } from "rxjs"

export interface Patron
{
    patronId: number,
    fullName:string,
    contactNumber:string,
    dob:string,
    gender:string,
    userName: string,
    email: string,
    password: string,
    cardNumber: string,
    cardValidity: string,
    cardType:string,
    accesstoken:string
}

export interface apiResponse
{
    message:string,
    accesstoken:string,
    timestamp:string,
    status:boolean,
    patron:Patron 
}

export interface Credentials
{
    accesstoken:string
}