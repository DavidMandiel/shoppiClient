import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user:any|undefined
  role:string = this._authUser.user? this._authUser.user?.role:''

  constructor(public _authUser:AuthService) { }

  ngOnInit(): void {
    console.log(this.role)
     }
}
