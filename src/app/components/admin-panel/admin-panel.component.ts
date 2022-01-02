import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { OrdersService } from 'src/app/services/orders.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

  showEditComp:boolean = false
  editProduct:any|undefined
  isAdmin = true

  constructor(
    public _router:Router,
    public _productsAndCategories:ProductsService,
    public _orders:OrdersService,
    public _auth:AuthService
    ) { }

  ngOnInit(): void {
    this._productsAndCategories.fetchAllCategories()
    this._productsAndCategories.fetchAllProducts()
    this._orders.getAllOrders()
    this._auth.getAllCostumers()
    if(!this._auth.user){
      this._router.navigate([''])
    }
  }
  showCard = (product:any)=>{
     this.editProduct = product
    this.showEditComp = true
  }
  closeCard = ()=>{
      this.showEditComp = false
    }
}
