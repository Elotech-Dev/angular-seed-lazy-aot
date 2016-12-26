import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';


import { AppComponent } from './app.component';
import { MenuModule } from './menu/menu.module';
import { Repository } from './repository';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot([
      { path: 'messages', loadChildren: './messages/messages.module#MessagesModule' },
      { path: 'settings', loadChildren: './settings/settings.module#SettingsModule' }
    ], { enableTracing: true }),
    MenuModule
  ],
  providers: [Repository, {provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
