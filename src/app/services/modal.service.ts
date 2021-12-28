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
    if(msgData?.msg){
     this.msg = msgData?.msg
     this.class = 'primary'

    }else if (msgData?.error){
      this.msg = msgData?.error
      this.class = 'warning'

    }else if (msgData?.info){
      this.msg = msgData?.info
      this.class = 'approve'

   }
    this.showModal = true
    setTimeout(()=>{
      this.showModal = false
    },1000*3)
  }
}
