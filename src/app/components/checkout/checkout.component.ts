import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalculateCostPipe } from 'src/app/pipes/calculate-cost.pipe';
import { CalculateSubTotalPipe } from 'src/app/pipes/calculate-sub-total.pipe';
import { AuthService } from 'src/app/services/auth.service';
import { AutocompleteService } from 'src/app/services/autocomplete.service';
import { OrdersService } from 'src/app/services/orders.service';

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
showModal:boolean = false
submittedOrder:any|undefined

  constructor(
    public _autoComplete:AutocompleteService,
    public _authUser:AuthService,
    public _router:Router,
    public _orders:OrdersService,
    // public subTotal: CalculateSubTotalPipe,
    // public costPerItem:CalculateCostPipe,

    ) { }

  ngOnInit(): void {
    if(!this._authUser.user){
      this._router.navigate([''])
    }
   }
  onSubmit = (f:any)=>{
    const form  = f.form.value
       let subTotal = 0
       this._authUser.openOrder.products_list.map((product:any)=>{
      subTotal = subTotal+product.quantity*product.product.price
      })


    const submittedOrder = {
      shippingInfo:{
        shippingDate:form.shipping_date,
        shippingAddress:{
          city:form.city,
          street:form.street,
          number:form.number
        }
      },
      order:this._authUser.openOrder._id,
      details:this._authUser.openOrder.products_list,
      totalCost:subTotal
    }
    this.submittedOrder = submittedOrder
    this._orders.checkOut(submittedOrder)
    this.showModal = true
  }

  doubleClicked  = ()=>{
    this.city = this._authUser.user.address.city
    this.street = this._authUser.user.address.street
    this.number = this._authUser.user.address.number
  }

  downloadInvoice = ()=>{
    this._orders.downLoad(this.submittedOrder)
   
  }

  closeModal = ()=>{
    this.showModal = false
    // this._router.navigate([''])
  }
 }
