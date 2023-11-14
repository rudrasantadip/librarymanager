import { Component,OnInit } from '@angular/core';
import { tableitems } from './table-data-items';


@Component({
  selector: 'app-historytable',
  templateUrl: './historytable.component.html',
  styleUrls: ['./historytable.component.css']
})
export class HistorytableComponent
{
  dtOptions: DataTables.Settings={};
  tableDataItems=tableitems;
  // dtOptions:DataTables.Settings={}

  constructor()
  {
    this.dtOptions = {
     pagingType:'full_numbers'
    };
  }

  ngOnInit():void
  {
    // let table = new DataTable()
  }
}
