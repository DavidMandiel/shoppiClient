import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateSubTotal'
})
export class CalculateSubTotalPipe implements PipeTransform {

  transform(productsList:Array <any>,) {
    let subTotal = 0
    productsList?.map(product=>{
    subTotal = subTotal+product.quantity*product.product.price
    })
    return(subTotal)
  }

}
