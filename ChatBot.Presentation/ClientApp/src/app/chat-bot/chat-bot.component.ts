import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-bot-component',
  templateUrl: './chat-bot.component.html'
})
export class ChatBotComponent {

  public Chat() {
    console.log("chat session started");
  }
}
