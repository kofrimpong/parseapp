import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as Parse from "parse";

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
Parse.initialize(environment.ApplicationId, environment.RestKey);
//@ts-ignore
Parse.serverURL = environment.serverURL;

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
