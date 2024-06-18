import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component'; // main component
import { HeaderComponent } from './app/header/header.component';

// bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err)); // only work if AppComponent is standalone component

// index.html load from main.ts get seletor app-root from AppComponent

// bootstrapApplication(HeaderComponent, appConfig).catch((err) => console.error(err));


// work with Module Componenent
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);