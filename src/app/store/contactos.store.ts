import {
  createFeatureSelector,
  createReducer,
  createSelector,
} from '@ngrx/store';
import { v4 } from 'uuid';

export interface IContactos {
  id: string;
  name: string;
  photo: string;
}

const initialState: IContactos[] = [
  {
    id: v4(),
    name: 'David Villota',
    photo: 'villovid07',
  },
];

export const contactosReducer = createReducer(initialState);

const selecContactosFeature = createFeatureSelector<IContactos[]>('contactos');

export const SelectContactos = createSelector(
  selecContactosFeature,
  (state: IContactos[]) => state
);
