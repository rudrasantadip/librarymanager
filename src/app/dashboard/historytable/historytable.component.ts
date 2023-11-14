import { Component,OnInit } from '@angular/core';
import { tableitems } from './table-data-items';


@Component({
  selector: 'app-historytable',
  templateUrl: './historytable.component.html',
  styleUrls: ['./historytable.component.css']
})
export class HistorytableComponent
{
  // dtOptions: DataTables.Settings={};
  tableDataItems=tableitems;

  ngOnInit():void
  {
    
  }
}
