import { Component, Input } from '@angular/core';
import { IMessage } from 'src/app/store/messages.store';

@Component({
  selector: 'app-message-bubble',
  templateUrl: './message-bubble.component.html',
  styleUrls: ['./message-bubble.component.css'],
})
export class MessageBubbleComponent {
  @Input() message!: IMessage;
  @Input() user!: string;
  esMiMensaje = true;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.esMiMensaje = this.user == this.message.userOrigen;
  }
}
