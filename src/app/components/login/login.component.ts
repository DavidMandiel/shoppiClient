import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ModalService } from 'src/app/services/modal.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 email:String = ''
  password:String = ''

@Output() userLogin=new EventEmitter()

  constructor(public _authUser:AuthService,
    private _router:Router,
    public _modalService:ModalService
    ) { }

  ngOnInit(): void {
    }
onSubmit =async (form:any)=>{
  this.email = form.value.email
  this.password = form.value.password
  this._authUser.login(form.value)
    if(this._authUser.user){
    this.email = ''
    this.password = ''
    this._router.navigate(['/landing'])
    }
this.userLogin.emit()
}
}
