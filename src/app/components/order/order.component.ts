import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  cost:number = 0
// TODO- add ngIf user is logged in
  constructor(public _authUser:AuthService, private _router:Router, public _orders:OrdersService) { }
order:any|undefined
  ngOnInit(): void {
 
  }

}
