import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ItemModel } from '../navigation/nav-data';

@Injectable({
  providedIn: 'root'
})
export class NavItemsService {

  private navItemList = new BehaviorSubject<ItemModel[]>([])
  navItemList$=this.navItemList.asObservable();
  constructor() { }

  getItemList():Observable<ItemModel[]>
  {
    return this.navItemList$;
  }

  updateItemList(newNavItemList: ItemModel[])
  {
    this.navItemList.next(newNavItemList);
  }
}
