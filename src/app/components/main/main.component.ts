import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
user:any|undefined
  constructor(public _authUser:AuthService) { }

  ngOnInit(): void {
    this.user = this._authUser.user
  }

}
