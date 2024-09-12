import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainUserChatComponent } from './pages/main-user-chat/main-user-chat.component';

const routes: Routes = [
  {
    path: '',
    component: MainUserChatComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatRoutingModule {}
