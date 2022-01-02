import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AutocompleteService } from 'src/app/services/autocomplete.service';
import { OrdersService } from 'src/app/services/orders.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

city:string = ''
street:string = ''
number:string = ''
search:string = ''
shipping_date:string|DatePipe = ''
credit:string = ''

  constructor(
    public _autoComplete:AutocompleteService,
    public _authUser:AuthService,
    public _router:Router,
    public _orders:OrdersService
    ) { }

  ngOnInit(): void {
    if(!this._authUser.user){
      this._router.navigate([''])
    }
   }
  onSubmit = (f:any)=>{
    const form  = f.form.value
    const submittedOrder = {
      shippingInfo:{
        shippingDate:form.shipping_date,
        shippingAddress:{
          city:form.city,
          street:form.street,
          number:form.number
        }
      },
      order:this._authUser.openOrder._id
    }
    this._orders.checkOut(submittedOrder)
  }

  doubleClicked  = ()=>{
    this.city = this._authUser.user.address.city
    this.street = this._authUser.user.address.street
    this.number = this._authUser.user.address.number
  }

 }
