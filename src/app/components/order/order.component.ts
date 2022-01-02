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

  constructor(public _authUser:AuthService, public _router:Router, public _orders:OrdersService) { }
    order:any|undefined
      ngOnInit(): void {
    if(!this._authUser.user){
      this._router.navigate([''])
      }
  }

}
