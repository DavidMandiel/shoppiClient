import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
product_name:string = ''
img:string = ''
price:number|undefined
available_quantity:number|undefined
category:string = ''


constructor(public _products:ProductsService, public _authUser:AuthService, public _router:Router) { }
ngOnInit(): void {
    this._products.fetchAllCategories()
}

onSubmit = (form:any)=>{
  this._products.addProduct(form.form.value)
  this.product_name = ''
  this.img = ''
  this.category = ''
  this.price = undefined
  this.available_quantity = undefined
}
}
