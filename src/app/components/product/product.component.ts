import { Component, Input, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product:any|undefined
  constructor(public _orders:OrdersService) { }

  ngOnInit(): void {
  }
addToCart = ()=>{
this._orders.addItemToCart()
}
}
