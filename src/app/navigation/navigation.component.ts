import { Component,EventEmitter,HostListener,OnInit,Output } from '@angular/core';
import { navbarData } from './nav-data';

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
  }

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed:boolean=false;
  screenWidth:number=0;
  navData = navbarData;

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
