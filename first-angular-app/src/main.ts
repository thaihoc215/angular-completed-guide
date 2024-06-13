import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component'; // main component
import { HeaderComponent } from './app/header/header.component';

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));

// index.html load from main.ts get seletor app-root from AppComponent

// bootstrapApplication(HeaderComponent, appConfig).catch((err) => console.error(err));