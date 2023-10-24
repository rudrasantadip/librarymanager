import { Component } from '@angular/core';
import { navbarData } from './nav-data';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent
{
  collapsed:boolean=false;
  navData = navbarData;

  toggleCollapse():void
  {
    this.collapsed=!this.collapsed;
  }

  closeSideNav():void
  {
    this.collapsed=false;
  }
}
