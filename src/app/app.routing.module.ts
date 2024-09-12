import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPrincipalComponent } from './components/login-principal/login-principal.component';

const routes: Routes = [
  { path: 'login', component: LoginPrincipalComponent },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then((m) => m.ChatModule),
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
