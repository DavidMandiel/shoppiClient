import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  showModal:boolean = false
  msg:string = ''
  class:string = 'primary'
  action:boolean = false

  constructor() { }

  showModalFunction = (msgData:any)=>{
    if(msgData.msg){
     this.msg = msgData.msg
     this.class = 'primary'
    }else{
      this.msg = msgData.error
      this.class = 'warning'
      console.log(this.msg)
   }
    this.showModal = true
    setTimeout(()=>{
      this.showModal = false
    },1000*3)
  }
}
