import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { NgIf } from '@angular/common';
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, NewTaskComponent, NgIf]
})
export class TasksComponent {

  @Input({ required: true }) userId!: string;
  @Input() name?: string;
  isAddingTask = false;

  // private tasksService = new TasksService(); // tradtional way - not injection
  private tasksService;

  // dependency injection
  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
  }
  // dependency injection second way
  // constructor(private tasksService: TasksService) {
  // }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  // onCompleteTask(id: string) {
  //   // this.tasks = this.tasks.filter((task) => task.id !== id); // remove due to use injection
  // }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

  // onAddTask(taskData: NewTaskData) {
  //   this.tasks.unshift({
  //     id: new Date().getTime().toString(),
  //     userId: this.userId,
  //     title: taskData.title,
  //     summary: taskData.summary,
  //     dueDate: taskData.date
  //   })
  //   this.isAddingTask = false;
  // }
}
