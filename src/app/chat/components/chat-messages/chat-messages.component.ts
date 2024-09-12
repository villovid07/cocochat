import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.store';
import { IMessage } from 'src/app/store/messages.store';
import { SessionService } from '../../services/session.service';
import { ContactoService } from '../../services/contacto.service';
import { IContactos } from 'src/app/store/contactos.store';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.css'],
})
export class ChatMessagesComponent {
  lstMessages$!: Observable<IMessage[]>;
  messagesComplete$!: Observable<IMessage[]>;
  myUser!: string;
  userSelected!: IContactos;

  constructor(
    private store: Store<AppState>,
    private sesion: SessionService,
    private contactoService: ContactoService
  ) {
    this.messagesComplete$ = this.store.pipe(select((state) => state.mensajes));
  }

  ngOnInit() {
    this.myUser = this.sesion.user;
    this.contactoService.sharedData$.subscribe((data) => {
      if (data) {
        this.userSelected = data;
        this.lstMessages$ = this.messagesComplete$.pipe(
          map((messages) =>
            messages.filter(
              (item) =>
                item.userDestino == data.id || item.userOrigen == data.id
            )
          )
        );
      }
    });
  }
}
