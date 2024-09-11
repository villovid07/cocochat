import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IContactos, SelectContactos } from 'src/app/store/contactos.store';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css'],
})
export class ListaUsuariosComponent {
  contactos = this.store.selectSignal(SelectContactos);
  constructor(private store: Store) {}
}
