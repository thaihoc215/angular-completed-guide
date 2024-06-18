import { NgModule } from "@angular/core";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksComponent } from "./tasks.component";
import { TaskComponent } from "./task/task.component";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        TasksComponent,
        TaskComponent,
        NewTaskComponent
    ],
    exports: [TasksComponent],
    // In Angular, when we are working on a feature module that is not the root module of our application, 
    // we typically import the CommonModule instead of the BrowserModule.
    imports: [CommonModule, FormsModule, SharedModule],
})
export class TasksModule {

}