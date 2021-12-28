import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ModalService } from 'src/app/services/modal.service';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public _router:Router, public _modal:ModalService, public _orders:OrdersService, public _authUser:AuthService) { }

  ngOnInit(): void {
    if(!this._authUser.user){
      this._router.navigate([''])
    }
    if(this._authUser.user && !this._authUser.haveOpenCart){
      this._orders.openNewOrder()
      this._modal.showModalFunction( this._orders?.msg)
    }else{
        this._orders.getUserOpenOrder()
        }
   }

}
