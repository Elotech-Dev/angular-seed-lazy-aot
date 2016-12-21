import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FooModule } from './foo/foo.module';
import { BarModule } from './bar/bar.module';
import { routing } from './app.routing';

/* App Root */

/* Feature Modules */

@NgModule({
  imports: [
    BrowserModule,
    routing,
    FooModule,
    BarModule
  ],
  declarations: [AppComponent],

  bootstrap: [AppComponent]
})
export class AppModule {
}

