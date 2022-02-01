import { enableProdMode } from '@angular/core';

//platformBrowserDynamic is the module responsible for loading the Angular application in the desktop browser
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


//The AppModule is the root module of the app.
//Angular applications are organized as modules. Every application built in Angular must
//have at least one module and the module which is loaded first when  the 
//applications is loaded is called a root module
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//the platformBrowserDynamic module loads the root module by invoking the
//bootstrapModule and giving it the reference to our Root module
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
