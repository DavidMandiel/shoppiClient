import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email:String = ''
  password:String = ''

  constructor(public _authUser:AuthService,
    private _router:Router,
    public _modalService:ModalService
    ) { }

  ngOnInit(): void {
    console.log(this._authUser.user)
  }
onSubmit =(form:any)=>{
  this.email = form.email
  this.password = form.password
  this._authUser.login(form.form.value)
  if(this._authUser.user){
    this.email = ''
    this.password = ''
     this._router.navigate([''])
    }

}
}
