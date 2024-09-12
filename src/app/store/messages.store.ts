import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';
import { v4 } from 'uuid';
import { IContactos } from './contactos.store';

export interface IMessage {
  id: string;
  userOrigen: string;
  userDestino: string;
  dateMessage: Date;
  message: string;
}

const initialState: IMessage[] = [
  {
    id: '1000',
    userOrigen: '2',
    userDestino: '1',
    dateMessage: new Date(),
    message: 'Nuevo mensaje',
  },
  {
    id: '2000',
    userOrigen: '3',
    userDestino: '1',
    dateMessage: new Date(),
    message: 'guau guau',
  },
];

export const addMessage = createAction(
  '[MESSAGE]addMessage',
  props<{ message: string; userOrigen: string; userDestino: string }>()
);

export const messagesReducer = createReducer(
  initialState,
  on(addMessage, (state, { message, userOrigen, userDestino }) => [
    ...state,
    { message, userOrigen, userDestino, dateMessage: new Date(), id: v4() },
  ])
);

export const selectUserState = createFeatureSelector<IMessage[]>('messages');

export const selectAllUsers = createSelector(
  selectUserState,
  (state: IMessage[]) => state
);
