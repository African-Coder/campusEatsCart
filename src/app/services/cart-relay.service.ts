import { Injectable } from '@angular/core';
import {  Subject } from 'rxjs';
import { Menu } from 'src/app/models/menu';
import { MenuService } from './menu.service';

@Injectable({
  providedIn: 'root'
})
export class CartRelayService {
  subject = new Subject();

  constructor() { }

  sendRelay(item: Menu) {
    //console.log(item);  /* displaying on console */
    this.subject.next(item);
  }

  getRelay() {
    return this.subject.asObservable()
  }

}
