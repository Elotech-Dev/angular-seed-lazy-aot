import { Component } from '@angular/core';
import { Dummy } from '../shared/model/dummy.type';

@Component({
  template : `<h1> {{title}} </h1>  {{dummy | json}} `,
  selector: 'app-root',
})
export class AppComponent {
  title = 'I\'m dummy!';
  dummy = new Dummy();
}
