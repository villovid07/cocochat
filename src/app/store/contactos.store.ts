import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';
import { v4 } from 'uuid';

export interface IContactos {
  id: string;
  name: string;
  photo: string;
}

const initialState: IContactos[] = [
  {
    id: '2',
    name: 'David Villota',
    photo: 'villovid07',
  },
  {
    id: '3',
    name: 'Cokito perro',
    photo: 'miudev',
  },
];

export const addContactos = createAction(
  '[CONTACTO] addContactos',
  props<{ name:string; photo:string; }>()
);

export const contactosReducer = createReducer(initialState, 
  on(addContactos,(state,{name, photo})=>
  [...state, {name, photo, id:v4()}]
));

const selecContactosFeature = createFeatureSelector<IContactos[]>('contactos');

export const SelectContactos = createSelector(
  selecContactosFeature,
  (state: IContactos[]) => state
);
