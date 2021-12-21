import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from './modal.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
user:any|undefined

  constructor(private _router:Router, public _modalService:ModalService) { }

  login =async (loggedUser:any) => {
  const res = await fetch('http://localhost:5000/api/users/login',{
  method:'post',
  body:JSON.stringify(loggedUser),
  headers: { 'content-type': 'application/json' },
}).then(response=>response.json()).then(data=>{this.user = data.user,
this._modalService.showModalFunction( data.msg?{msg:data.msg}:{error:data.error})})
.catch(err=>console.log(err))
}

logout = async () => {
  await fetch('http://localhost:5000/api/users/logout',{
    method:'delete'
  }).then(response =>response.json())
  .then()
  .catch(err=>console.log(err))
  this.user=null
  this._router.navigate(['landing'])
}

}
