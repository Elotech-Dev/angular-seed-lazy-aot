import {Component} from '@angular/core';
import {Repository} from '../repository'

@Component({
  selector: 'app-page-settings',
  template: `
    <h1>Page Size Settings</h1>

    <div *ngFor="let p of repository.folders">
      Page size for '{{p}}' <input [(ngModel)]="repository.pageSize[p]"> (<a [routerLink]="['/messages', p]">open</a>)
    </div>

    <a routerLink="../">Back</a>
  `
})
export class PageSizeComponent {
  constructor(public repository: Repository) {}
}
