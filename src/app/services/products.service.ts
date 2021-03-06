import { Injectable } from '@angular/core';
import { ModalService } from './modal.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  navigate(arg0: string[]) {
    throw new Error('Method not implemented.');
  }

  categories:any|undefined
  products_list:any|undefined
  numberOfProducts:number|any
  product:any|undefined

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

// Get a specific product by Id
getProduct = async(productId:string)=>{
  await fetch(`http://localhost:5000/api/products/${productId}`,{
    credentials: 'include',
  }).then( res=>res.json()).then(data=> this.product = data).catch(err=>console.log(err))
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
  }).then( res=>res.json()).then(data=>{this._modalService.showModalFunction( data), this.fetchAllProducts(), console.log(data)})
}

updateProduct = async(product:any)=>{
   await fetch(`http://localhost:5000/api/products/update-product/${product._id}`,{
    method:'put',
    headers:{'content-type':'application/json'},
    body:JSON.stringify(product),
    credentials: 'include',
  }).then( res=>res.json()).then(data=>{this._modalService.showModalFunction(data), this.fetchAllProducts()})
}


deleteProduct = ()=>{
  console.log('delete product')

}
deleteCategory = ()=>{
  console.log('delete category')

}
}
