import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {


  constructor(public _products:ProductsService, public _authUser:AuthService, public _router:Router) { }

  products_arr = []
  showCard:boolean = false
  activeNav:string = 'all'
  productToCart:any|undefined
searchResult:string = ''
search:String|undefined

  ngOnInit(): void {
    this._products.fetchAllCategories()
    this._products.fetchAllProducts()
    this.categoryFilter('all')

  }

 categoryFilter = (category:string)=>{
    if(category === 'all'){
     this.products_arr = this._products.products_list
     this.activeNav  ='all'
   }else{
     this.products_arr= this._products.products_list.filter((product:any)=>product.category.category_name === category)
    this.activeNav = category
    }
 }

 addProductToCart = (product:any)=>{
  this.productToCart = product
  this.showCard = true
 }
 closeOpenCard = ()=>{
   this.showCard = false
 }
 onSearch = ()=>{
  if(this.search === ''){
    this.categoryFilter('all')
  }
  const searchProducts = this._products.products_list.filter((prd:any)=> prd.product_name.toLowerCase().includes(this.search?.toLowerCase()))
  this.products_arr =  searchProducts
 }
}
