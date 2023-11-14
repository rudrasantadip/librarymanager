import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgxUiLoaderService} from 'ngx-ui-loader';
import { NavItemsService } from './services/nav-items.service';
import { navbarData } from './navigation/nav-data';


interface SideNavToggle
{
screenWidth:number;
collapsed:boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit 
{
  
  constructor(private ngxService: NgxUiLoaderService,private navItemService:NavItemsService)
   {
    this.navItemService.updateItemList(navbarData)
   }


  ngOnInit() :void
  {
    this.ngxService.start('master'); 
    setTimeout(() => {
      this.ngxService.stop('master'); 
    }, 1000);
  }
  
  title = 'librarymanager';
  isNavCollapsed:boolean=false;
  screenWidth:number=0

  onToggleSideNav(data:SideNavToggle):void
  {
    this.screenWidth=data.screenWidth;
    this.isNavCollapsed=data.collapsed;
  }
}
