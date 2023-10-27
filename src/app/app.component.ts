import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgxUiLoaderService} from 'ngx-ui-loader';


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
  
  constructor(private ngxService: NgxUiLoaderService) {}


  ngOnInit() :void
  {
    this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
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
