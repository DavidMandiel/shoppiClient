import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {

  constructor(public _orders:OrdersService, public _authUser:AuthService) { }
  @Input() product:any|undefined
  @Input() showCard:boolean = false
  ngOnInit(): void {
    console.log(this.product)
  }
addToCart = ()=>{
  console.log(this._authUser.openOrder)
}
}
