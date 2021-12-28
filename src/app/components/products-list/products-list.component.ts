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

  ngOnInit(): void {
    this._products.fetchAllProducts()
      }

}
