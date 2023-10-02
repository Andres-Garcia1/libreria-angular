import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { LibrosComponent } from './app/libros/libros.component';


platformBrowserDynamic().bootstrapModule(AppModule, )
  .catch(err => console.error(err));
