import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatSocketService {
  socket:any
  constructor() { 
    this.socket = io('http://localhost:3001')
  }

  sendMessage(message:string){
    this.socket.emit('chatMessage',message)
  }

  getMessages():Observable<string>{
    return new Observable<string>((observer)=>{
      this.socket.on('chatMessage',(message:string)=>{
        observer.next(message)
      })
      return ()=> this.socket.disconnect()
    })
  }
}
