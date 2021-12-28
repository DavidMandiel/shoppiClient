import { Injectable } from '@angular/core';
import { ModalService } from './modal.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
categories:any|undefined
products_list:any|undefined
numberOfProducts:number|any

  constructor(public _modalService:ModalService) { }
// Fetch all categories
fetchAllCategories = async()=>{
  await fetch('http://localhost:5000/api/categories',{
    credentials: 'include',
  }).then( res=>res.json()).then(data=>this.categories=data)
}

// Fetch all categories
fetchAllProducts = async()=>{
  await fetch('http://localhost:5000/api/products',{
    credentials: 'include',
  }).then( res=>res.json()).then(data=>{this.products_list=data, this.numberOfProducts = data.length})
}
// Add new Category
addCategory = async(category:string)=>{
   await fetch('http://localhost:5000/api/categories/add-category',{
    method:'post',
    headers:{'content-type':'application/json'},
    body:JSON.stringify({category_name:category}),
    credentials: 'include',
     }).then( res=>res.json()).then(data=>{this._modalService.showModalFunction( data.msg?{msg:data.msg}:{error:data.error}), this.fetchAllCategories()})
}
// Add new Product
addProduct = async(product:any)=>{
  await fetch('http://localhost:5000/api/products/add-product',{
    method:'post',
    headers:{'content-type':'application/json'},
    body:JSON.stringify(product),
    credentials: 'include',
  }).then( res=>res.json()).then(data=>{this._modalService.showModalFunction( data.msg?{msg:data.msg}:{error:data.error}), this.fetchAllProducts()})
}
}
