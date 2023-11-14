import { Component } from '@angular/core';
import { cardItems } from '../cardItems';




export interface CardModel
{
  image:string;
  title:string;
  description:string;
  routerLink:string
}


@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})



export class AdminhomeComponent
{
  AdmincardItems:CardModel[] = cardItems;

}
