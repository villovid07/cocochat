import { Component, Input, Output } from '@angular/core';
import { IContactos } from 'src/app/store/contactos.store';
import { ContactoService } from '../../services/contacto.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent {
  @Input() contacto!: IContactos;

  constructor(private _contactoService: ContactoService) {}

  darurl(): string {
    return `https://unavatar.io/${this.contacto.photo}`;
  }

  selectContacto() {
    this._contactoService.setSharedData(this.contacto);
  }
}
