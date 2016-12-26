import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message, Repository } from '../repository';

@Component({
  selector: 'app-message-cmp',
  template: `
    <h1>Message {{id}}</h1>
    <p><b>Text:</b> {{message.text}}</p>
    <div>
      <a routerLink="/messages/{{folder}}">Go to Folder</a>
    </div>
  `
})
export class MessageComponent {
  folder: string;
  id: number;
  message: Message;

  constructor(route: ActivatedRoute, repository: Repository) {
    this.folder = route.snapshot.params['folder'];
    this.id = +route.snapshot.params['id'];
    this.message = repository.message(this.id);
  }
}
