import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { OrdersService } from 'src/app/services/orders.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
user:any|undefined
  constructor(public _authUser:AuthService, public _router:Router,public _orders:OrdersService, public _products:ProductsService) { }
// TODO - configure to total number of orders and items sold on store
 ngOnInit(): void {
    this._orders.getNumberOfOrders()
    this._products.fetchAllProducts()
    }

goToCart = ()=>{
this._router.navigate(['/dashboard'])
}

startShopping = ()=>{
  this._orders.openNewOrder()
  this._router.navigate(['/dashboard'])
}
}
