import { ActionReducerMap } from '@ngrx/store';
import { contactosReducer, IContactos } from './contactos.store';

export interface AppState {
  contactos: IContactos[];
}

export const appReducers: ActionReducerMap<AppState> = {
  contactos: contactosReducer,
};
