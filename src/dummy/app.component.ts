import { Component } from '@angular/core';

@Component({
  template : `<h1> {{title}} </h1>`,
  selector: 'app-root',
})
export class AppComponent {
  title = 'I\'m dummy!';
}
