// decorate class with a special decorator 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { CardComponent } from './shared/card/card.component';
import { TaskComponent } from './tasks/task/task.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
    // declare and register all the components that need to work together
    declarations: [AppComponent,
        HeaderComponent,
        UserComponent,
        ],
    //   root angular module : all the root components wanna setup for the app
    bootstrap: [AppComponent],
    // imports: [BrowserModule, HeaderComponent, UserComponent, TasksComponent],
    // BrowserModule included DatePipe / NgIf / NgFor...
    // all import module here will merge to all component declared above in declaration
    imports: [BrowserModule, SharedModule, TasksModule],
    providers: [],

})
export class AppModule {

}