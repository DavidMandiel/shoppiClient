import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { ModalService } from './modal.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  // openOrder:any|undefined
  newOrder:any|undefined
  userOrdersList:any|undefined = []
  allOrders:any|undefined = []
  msg:any|undefined
  numberOfOrders:number|undefined

  constructor(public _modalService:ModalService, public _router:Router, public _authUser:AuthService) { }

  // Admin functions
getAllOrders = async()=>{
  await fetch('http://localhost:5000/api/orders',{
    credentials: 'include',
  }).then(res=>res.json()).then(data=>this.allOrders = data).catch(err=>console.log(err))

}
  // Get number of orders
getNumberOfOrders = async()=>{
  await fetch('http://localhost:5000/api/orders/numberOfOrders',{
    credentials: 'include',
  }).then(res=>res.json()).then(data=>this.numberOfOrders = data.numberOfOrders).catch(err=>console.log(err))

}

// Customer functions
getAllUserOrders = async()=>{
  await fetch('http://localhost:5000/api/orders/customer-orders',{
    credentials: 'include',
  }).then(res=>res.json()).then(data=>this.userOrdersList = data).catch(err=>console.log(err))

}

getUserOpenOrder = async () => {
 await fetch('http://localhost:5000/api/orders/open-order',{
    credentials: 'include',
  }).then(res=>res.json()).then(data=>this._authUser.openOrder = data[0]).catch(err=>console.log(err))

}

openNewOrder = async()=>{
 await fetch('http://localhost:5000/api/orders/new-order',{
    method:'post',
    credentials: 'include',
    headers:{'content-type':'application/json'}
  }).then(res=>res.json()).then(data=>{this.msg = data, this.getUserOpenOrder(), this._modalService.showModalFunction(this.msg)}).catch(err=>console.log(err))
}

addItemToCart = async(orderId:string, newItem:any)=>{
  await fetch(`http://localhost:5000/api/orders/add-item/${orderId}`,{
    credentials: 'include',
    method:'put',
    body:JSON.stringify(newItem),
    headers: { 'content-type': 'application/json' }
  }).then(res=>res.json()).then(data=>{this._modalService.showModalFunction(data), this.getUserOpenOrder()}).catch(err=>console.log(err))
}

removeItemFromCart = async(orderId:string, itemId:string)=>{
  await fetch(`http://localhost:5000/api/orders/remove-item/${orderId}/${itemId}`,{
    credentials: 'include',
    method:'put'
  }).then(res=>res.json()).then(data=>{this._authUser.openOrder = data.order, this._modalService.showModalFunction(data.msg)}).catch(err=>console.log(err))
}

updateItemQuantityUp= async(orderId:string, itemId:string)=>{
    await fetch(`http://localhost:5000/api/orders/update-item/up/${orderId}/${itemId}`,{
      credentials: 'include',
      method:'put'
    }).then(res=>res.json()).then(data=>{this._authUser.openOrder = data.order, this._modalService.showModalFunction(data.msg)}).catch(err=>console.log(err))

  }

updateItemQuantityDown= async(orderId:string, itemId:string)=>{
    await fetch(`http://localhost:5000/api/orders/update-item/down/${orderId}/${itemId}`,{
      credentials: 'include',
      method:'put'
    }).then(res=>res.json()).then(data=>{

     this._authUser.openOrder = data.order,
      this._modalService.showModalFunction(data.msg)}).catch(err=>console.log(err))

  }

deleteCart = async(orderId:string)=>{

    if(this._authUser?.openOrder.products_list?.length >0){
      return this._modalService.showModalFunction({msg:'You have to delete all items before you can delete cart'})
    }
    await fetch(`http://localhost:5000/api/orders/delete-order/${orderId}`,{
      credentials: 'include',
      method:'delete'
    }).then(res=>res.json()).then(data=>{this.msg = data,this._authUser.haveOpenCart = false,this._authUser.openOrder === false, this._router.navigate([''])}).catch(err=>console.log(err))
  }

  checkOut = async(submittedOrder:any)=>{
    await fetch(`http://localhost:5000/api/orders/submit-order/${submittedOrder.order}`,{
       method:'post',
       credentials: 'include',
       headers:{'content-type':'application/json'},
       body:JSON.stringify(submittedOrder.shippingInfo)
     }).then(res=>res.json()).then(data=>{this.getUserOpenOrder(), this._modalService.showModalFunction(data.msg)}).catch(err=>console.log(err))
   }

}
