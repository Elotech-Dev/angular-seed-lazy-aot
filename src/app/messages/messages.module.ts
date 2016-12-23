import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MessageComponent } from './message.component';
import { MessagesComponent } from './messages.component';

export const MESSAGES_ROUTES = [
  { path: ':folder', component: MessagesComponent },
  { path: ':folder/:id', component: MessageComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(MESSAGES_ROUTES)],
  declarations: [MessageComponent, MessagesComponent],
})
export class MessagesModule { }
