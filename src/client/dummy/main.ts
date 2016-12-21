// The browser platform with a compiler
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { enableProdMode } from '@angular/core';

// The app module


if (String('<%= BUILD_TYPE %>') === 'prod') {
  enableProdMode();
}


// Compile and launch the module
platformBrowserDynamic().bootstrapModule(AppModule);

