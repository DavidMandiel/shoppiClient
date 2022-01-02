import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  category_name:string = ''

  constructor(public _products:ProductsService, public _authUser:AuthService, public _router:Router) { }
  ngOnInit(): void {
    if(!this._authUser.user){
      this._router.navigate([''])
    }else{
       this._products.fetchAllCategories()
     }
  }
onSubmit = ()=>{
  this._products.addCategory(this.category_name)
  }

}
