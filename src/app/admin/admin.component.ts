import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavItemsService } from '../services/nav-items.service';
import { ItemModel, adminbarData, navbarData } from '../navigation/nav-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit,OnDestroy
{

 


  adminItemList:ItemModel[]=adminbarData
  constructor(private navitemService:NavItemsService,private router:Router)
  {
    this.navitemService.updateItemList(this.adminItemList)  
  }

  ngOnDestroy(): void 
  {
    let ans
    ans=prompt("You will be logged out of this site, and all unsaved progress will be lost. Press Y to proceed, anything else to cancle")
    if(ans?.toLocaleLowerCase()=='y')
    {
      this.navitemService.updateItemList(navbarData)
    }
    else
    {
      this.router.navigate(['/admin/home'])
    }
  }

  ngOnInit(): void
  {
    
  }

}
