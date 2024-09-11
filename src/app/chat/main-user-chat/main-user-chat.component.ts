import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-user-chat',
  templateUrl: './main-user-chat.component.html',
  styleUrls: ['./main-user-chat.component.css'],
})
export class MainUserChatComponent {
  constructor(private router: Router) {}

  regresar(): void {
    this.router.navigate(['/']);
  }
}
