// {
//     "patronId": 1,
//     "personalInfo": {
//         "personalId": 1,
//         "fullName": null,
//         "gender": null,
//         "dob": null
//     },
//     "cardCredentials": {
//         "credId": 1,
//         "cardNumber": "20231112160605",
//         "cardValidity": "12-11-2024",
//         "cardType": "A"
//     },
//     "logCredentials": {
//         "loginId": 1,
//         "userName": "qwerty123",
//         "password": "Santadip9830#",
//         "email": "santadip9@gmail.com"
//     },
//     "accessToken": {
//         "accessToken": "yhRZPGr8i6k0PJP4NnwsuXfwL0T0YlAyPbJTS9rlJQY",
//         "tokenId": 1
//     }
// }
export interface PersonalInfo
{
    personalId:number,
    fullName:string,
    gender:string,
    dob:string
}

export interface AccessToken
{
    accessToken:string,
    tokenId:number
}

export interface CardCredentials
{
    cardId:number,
    cardNumber:string,
    cardValidity:string,
    cardType:string
}

export interface LogCredentials
{
    loginId: number,
    userName: string,
    password: string,
    email: string
}

export interface Patron
{
    patronId:number,
    personalInfo:PersonalInfo,
    cardCredentials:CardCredentials,
    logCredentials:LogCredentials,
    accessToken:AccessToken
}

export interface authResponse
{
    accessToken:string,
    message:string,
    status:boolean
}

export interface Credentials
{
    accessToken:string,
    isLoggedin?:string
}