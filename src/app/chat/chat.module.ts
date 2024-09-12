import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainUserChatComponent } from './pages/main-user-chat/main-user-chat.component';
import { ChatRoutingModule } from './chat.routing.module';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { ChatMessagesComponent } from './components/chat-messages/chat-messages.component';
import { NewMessageComponent } from './components/new-message/new-message.component';
import { MessageBubbleComponent } from './components/message-bubble/message-bubble.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrearContactoComponent } from './components/crear-contacto/crear-contacto.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MainUserChatComponent,
    ListaUsuariosComponent,
    UsuarioComponent,
    ChatMessagesComponent,
    NewMessageComponent,
    MessageBubbleComponent,
    CrearContactoComponent
  ],
  imports: [CommonModule, ChatRoutingModule, FormsModule, ReactiveFormsModule, SharedModule
  ],
})
export class ChatModule {}
