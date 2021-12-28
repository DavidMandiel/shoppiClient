import { ViewFlags } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from './modal.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
user:any|undefined
role:string|undefined
haveOpenCart:boolean = false
openOrder:any|undefined

  constructor(private _router:Router, public _modalService:ModalService) { }

lastOrder = ()=>{

}

// TODO - correct delete from order console to return to new cart open

  // Login user
  login =async (loggedUser:any) => {
  const res = await fetch('http://localhost:5000/api/users/login',{
  method:'post',
  body:JSON.stringify(loggedUser),
  headers: { 'content-type': 'application/json' },
  credentials: 'include',
    }).then(response=>response.json()).then(data=>{this.user = data.user,this.role =data.user?.role
     const openOrder = this.user?.orders.filter((order:any)=>order.isOpen===true)
      if(openOrder.length > 0){
        this.haveOpenCart = true
        this.openOrder = openOrder
        this._modalService.showModalFunction( {info:`Welcome back ${data.user.pname}, You have an open cart`})
      }else{this._modalService.showModalFunction( data.msg?{msg:data.msg}:{error:data.error})
    }})
    .catch(err=>console.log(err))
}

  // Reload user
  reload =async () => {
  const res = await fetch('http://localhost:5000/api/users/reload',{
  method:'get',
  credentials: 'include',
    }).then(response=>response.json()).then(data=>{this.user = data
       const openOrder = this.user?.orders.filter((order:any)=>order.isOpen===true)
      if(openOrder.length > 0){
        this.haveOpenCart = true
        this.openOrder = openOrder
      } else {
        this.haveOpenCart = false
        this.openOrder = null
      }})
    .catch(err=>console.log(err))
}

// Register new user
  register =async (newUser:any) => {
  const res = await fetch('http://localhost:5000/api/users/register',{
  method:'post',
  body:JSON.stringify(newUser),
  headers: { 'content-type': 'application/json' },
  credentials: 'include',
}).then(response=>response.json()).then(data=>{this.user = data.user,this.role =data.user?.role
this._modalService.showModalFunction( data.msg?{msg:data.msg}:{error:data.error}) })
.catch(err=>console.log(err))
}

// Logout user
logout = async () => {
  await fetch('http://localhost:5000/api/users/logout',{
    method:'delete',
    credentials: 'include',
  }).then(response =>response.json())
  .then( (data)=>{this.user=null,this._modalService.showModalFunction( data.msg?{msg:data.msg}:{error:data.error})})
  .catch(err=>console.log(err))
  this._router.navigate([''])
}
}
