import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-admin-edit-console',
  templateUrl: './admin-edit-console.component.html',
  styleUrls: ['./admin-edit-console.component.scss']
})
export class AdminEditConsoleComponent implements OnInit {

product_name:string = ''
img:string = ''
price:number|undefined
stock:number|undefined
category:string = ''

@Input() product:any|undefined
@Input() showCard:boolean = false
@Output() closeCard = new EventEmitter()

constructor(public _products:ProductsService, public _authUser:AuthService, public _router:Router) { }
ngOnInit(): void {
    this._products.fetchAllCategories()
    this.product_name = this.product.product_name
    this.img = this.product.img
    this.price = this.product.price
    this.stock = this.product.stock
    this.category = this.product.category
}

onSubmit = (form:any)=>{
  const updatedProduct = {}
  this._products.updateProduct(updatedProduct)
  this.product_name = ''
  this.img = ''
  this.category = ''
  this.price = undefined
  this.stock = undefined
}

close = ()=>{
  this.closeCard.emit()
}
update = ()=>{
  const product = {
    _id:this.product._id,
    product_name:this.product_name,
    img:this.img,
    price:this.price,
    stock:this.stock,
    category:this.category
  }
  this._products.updateProduct(product)
  this.close()
  console.log(product)
}
}
