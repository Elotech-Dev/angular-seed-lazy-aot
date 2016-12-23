import { Component } from '@angular/core';
import { environment } from './environments/environment';
import { Dummy } from '../shared/model/dummy.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  environmentName = environment.production;
  dummy = new Dummy();
}
