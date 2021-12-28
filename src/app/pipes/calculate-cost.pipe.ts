import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateCost'
})
export class CalculateCostPipe implements PipeTransform {

  transform( price:number,quantity:number) {
return price*quantity
  }

}
