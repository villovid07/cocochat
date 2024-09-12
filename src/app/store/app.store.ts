import { ActionReducerMap } from '@ngrx/store';
import { contactosReducer, IContactos } from './contactos.store';
import { IMessage, messagesReducer } from './messages.store';

export interface AppState {
  contactos: IContactos[];
  mensajes: IMessage[];
}

export const appReducers: ActionReducerMap<AppState> = {
  contactos: contactosReducer,
  mensajes: messagesReducer,
};
