import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { OrdersService } from 'src/app/services/orders.service';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product:any|undefined
  @Output() addProduct = new EventEmitter()

  constructor(public _orders:OrdersService, public _authUser:AuthService, public _products:ProductsService) { }

  ngOnInit(): void {
  }
addToCart = async (product:any)=>{
 await this._products.getProduct(product._id)
this.addProduct.emit(this._products.product)
}
}
