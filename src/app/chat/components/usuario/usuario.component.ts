import { Component, Input } from '@angular/core';
import { IContactos } from 'src/app/store/contactos.store';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent {
  @Input() contacto!: IContactos;

  darurl(): string {
    return `https://unavatar.io/${this.contacto.photo}`;
  }
}
