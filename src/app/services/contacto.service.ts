import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IContactos } from 'src/app/store/contactos.store';

@Injectable({
  providedIn: 'root',
})
export class ContactoService {
  private sharedDataSubject: BehaviorSubject<IContactos> =
    new BehaviorSubject<any>(null);

  public sharedData$: Observable<IContactos> =
    this.sharedDataSubject.asObservable();

  setSharedData(data: IContactos) {
    this.sharedDataSubject.next(data); // Update the shared data
  }

  // Method to get the current value
  getSharedData(): any {
    return this.sharedDataSubject.value; // Access the latest value
  }
}
