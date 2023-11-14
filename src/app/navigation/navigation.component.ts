import { Component,EventEmitter,HostListener,OnInit,Output } from '@angular/core';
import { ItemModel, navbarData } from './nav-data';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { NavItemsService } from '../services/nav-items.service';
import { Router } from '@angular/router';

interface SideNavToggle
{
screenWidth:number;
collapsed:boolean;
}


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})


export class NavigationComponent implements OnInit
{

  navData!:ItemModel[]
  constructor(
    
    private navitemService:NavItemsService,
    private router:Router
    )
    {

    }

  @HostListener('window:resize',['$event'])
  onResize(event:any)
  {
    this.screenWidth=window.innerWidth;
    if(this.screenWidth<=768)
    {
      this.collapsed=false;
      this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth});
    }
  }

  ngOnInit(): void 
  {
    this.screenWidth=window.innerWidth; 
    // this.navData = navbarData;
    this.navitemService.getItemList().subscribe(
      (items)=>
      {
        this.navData=items;
      }
    )   
  }

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed:boolean=false;
  screenWidth:number=0;


  toggleCollapse():void
  {
    this.collapsed=!this.collapsed;
    this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth});
  }

  closeSideNav():void
  {
    this.collapsed=false;
    this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth});
  }
}
