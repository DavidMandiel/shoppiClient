import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AutocompleteService } from 'src/app/services/autocomplete.service';
import { ModalService } from 'src/app/services/modal.service';
// TODO - add validation to password min characters
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  id:string= ''
  email:string= ''
  password:string= ''
  confirm_password:string= ''
  city:string= ''
  street:string= ''
  number:string= ''
  pname:string= ''
  fname:string= ''
  showTwo:boolean = false

  constructor(public _authUser:AuthService,
    private _router:Router,
    public _modalService:ModalService,
    public _autoComplete:AutocompleteService
    ) { }

  ngOnInit(): void {
    }

    onPasswordChange(f:any) {
      if(f.form.controls.password.value !== f.form.controls.confirm_password.value){
        f.form.controls.confirm_password.errors = 'Passwords does not match'
        f.form.controls.confirm_password.status = 'INVALID'
        f.form.status = 'INVALID'
        this.showTwo = false
}else{
  this.showTwo = true
}
    }


onSubmitPartOne =(form:any)=>{
  console.log(form.form.value)
}

onSubmitPartTwo =(form:any)=>{
const newUser = {
  address:{
    city:this.city,
    street:this.street,
    number:this.number,

  },
  social_no:this.id,
  email:this.email,
  password:this.password,
  pname:this.pname,
  fname:this.fname,
}
this._authUser.register(newUser)
}


}
