import { Component } from '@angular/core';
import { ChatSocketService } from '../../../core/services/chat-socket.service';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  message:string=''
  messages:string[]=[]
  constructor(private chatService: ChatSocketService) {
    this.chatService.getMessages().subscribe((data:any)=>{

      this.messages = data
    })
  }
  sendMessage(){
    this.chatService.sendMessage(this.message)
  }
}
