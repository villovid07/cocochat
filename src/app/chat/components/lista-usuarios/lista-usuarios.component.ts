import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { IContactos, SelectContactos } from 'src/app/store/contactos.store';
import { CrearContactoComponent } from '../crear-contacto/crear-contacto.component';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css'],
})
export class ListaUsuariosComponent {
  contactos = this.store.selectSignal(SelectContactos);
  bsModalRef!: BsModalRef;
  constructor(private store: Store, private modalService:BsModalService) {}

  crearContacto(){
    this.modalService.show(CrearContactoComponent,{
      class: 'modal-lg'
    })

  }
}
