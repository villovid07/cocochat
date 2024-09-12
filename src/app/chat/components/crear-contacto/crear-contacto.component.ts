import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AppState } from 'src/app/store/app.store';
import { addContactos } from 'src/app/store/contactos.store';

@Component({
  selector: 'app-crear-contacto',
  templateUrl: './crear-contacto.component.html',
  styleUrls: ['./crear-contacto.component.css']
})
export class CrearContactoComponent {
  formUsuario!:FormGroup;


  constructor(private bsModalRef:BsModalRef, private fb:FormBuilder, private store:Store<AppState>){
      this.formUsuario= fb.group({
        nombreUsuario: ['', Validators.required],
        username:['', Validators.required]
      });
  }

  crearUsuario(){
    if(this.formUsuario.valid){
      const {nombreUsuario, username}= this.formUsuario.value;
      this.store.dispatch(addContactos({name:nombreUsuario, photo:username}))
      this.bsModalRef.hide();
    }
  }

  closeModal(){
    this.bsModalRef.hide();
  }

}
