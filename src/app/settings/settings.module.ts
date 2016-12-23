import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SettingsComponent } from './settings.component';
import { PageSizeComponent } from './page_size.component';

export const SETTINGS_ROUTES = [
  { path: '', component: SettingsComponent },
  { path: 'pagesize', component: PageSizeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(SETTINGS_ROUTES)
  ],
  declarations: [SettingsComponent, PageSizeComponent]
})
export class SettingsModule { }
