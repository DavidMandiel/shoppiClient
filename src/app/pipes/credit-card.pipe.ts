import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard'
})
export class CreditCardPipe implements PipeTransform {

  transform(string:string) {
if(string.length<16){
  return
}
    let str1 = string.substring(0, 4)
    let str2 = string.substring(4, 8)
     let str3 = string.substring(8, 12)
     let str4 = string.substring(12, 16)
    return str1 + '-'+str2+'-'+str3+'-'+str4
  }

}
