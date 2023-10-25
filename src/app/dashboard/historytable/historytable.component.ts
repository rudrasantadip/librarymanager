import { Component,OnInit } from '@angular/core';
import {DataTablesModule} from 'angular-datatables'
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

  ngOnInit():void
  {
    this.dtOptions={
      pagingType:'full_numbers',
      lengthChange:false,
      "columnDefs": [
        { "orderable": false, "targets": [2,3,5,6,7] } // Applies the option to all columns
      ],
      "order":[]
    }
  }
}
