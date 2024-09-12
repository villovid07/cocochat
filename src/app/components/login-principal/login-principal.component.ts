import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-principal',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './login-principal.component.html',
  styleUrls: ['./login-principal.component.css'],
})
export class LoginPrincipalComponent {
  constructor(private router: Router) {}

  ingresar(): void {
    this.router.navigateByUrl('/chat');
  }
}
