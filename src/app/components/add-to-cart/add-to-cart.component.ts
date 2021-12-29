import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ModalService } from 'src/app/services/modal.service';
import { OrdersService } from 'src/app/services/orders.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {

  constructor(
    public _modal:ModalService,
    public _orders:OrdersService,
    public _authUser:AuthService,
    public _products:ProductsService
    ) { }

  @Input() product:any|undefined
  @Input() showCard:boolean = false
  @Output() closeCard = new EventEmitter()

  availableQuantity:number = 0
  quantity:number = 0
  disableUpBtn = false
  disableDownBtn = false
  cartItem:any = {}

  ngOnInit (): void {
       this.availableQuantity = this.product.stock
    }

  incBtn = ()=>{
    if(this.availableQuantity === 0){
      return this._modal.showModalFunction({error:'Sorry, but there are no products available'})
    }
    this.quantity += 1
    this.availableQuantity -= 1

  }
  decBtn = ()=>{
    if(this.quantity === 0){
      return this._modal.showModalFunction({error:'You have no items left'})
    }
    this.quantity -= 1
    this.availableQuantity += 1
  }
addToCart = ()=>{
  console.log()
  const newItem = {
    product:this.product._id,
    quantity:this.quantity
  }
  this._orders.addItemToCart(this._authUser.openOrder._id,newItem)
  this.close()
  }

close=()=>{

  this.closeCard.emit()
}
}
