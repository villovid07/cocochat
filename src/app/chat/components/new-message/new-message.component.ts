import { Component } from '@angular/core';
import { ContactoService } from '../../../services/contacto.service';
import { Observable, Subscription } from 'rxjs';
import { IContactos } from 'src/app/store/contactos.store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { addMessage, IMessage } from '../../../store/messages.store';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.store';
import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css'],
})
export class NewMessageComponent {
  selectedUser$!: Observable<IContactos>;
  formMessage!: FormGroup;
  selected!: IContactos;

  private subscription: Subscription = new Subscription();

  constructor(
    private _contactoService: ContactoService,
    public fb: FormBuilder,
    private store: Store<AppState>,
    private sessionService: SessionService
  ) {}

  ngOnInit() {
    this.selectedUser$ = this._contactoService.sharedData$;

    this.formMessage = this.fb.group({
      newMessage: ['', Validators.required],
    });

    const userSubscription = this.selectedUser$.subscribe((selectedUser) => {
      this.selected = selectedUser;
      if (selectedUser) {
        this.formMessage.get('newMessage')?.enable();
      } else {
        this.formMessage.get('newMessage')?.disable();
      }
    });

    this.subscription.add(userSubscription);
  }

  ngOnDestroy(): void {
    // Unsubscribe all subscriptions
    this.subscription.unsubscribe();
  }

  enviarMensaje() {
    if (this.formMessage.valid) {
      console.log('hole');
      this.store.dispatch(
        addMessage({
          message: this.formMessage.value.newMessage ?? '',
          userOrigen: this.sessionService.user,
          userDestino: this.selected.id,
        })
      );
      this.formMessage.controls['newMessage'].setValue(null);
    }
  }
}
