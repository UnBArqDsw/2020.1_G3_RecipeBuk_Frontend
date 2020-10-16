import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { setupFirebase } from 'config/configFirebase';

if (environment.production) {
  enableProdMode();
}

setupFirebase();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
