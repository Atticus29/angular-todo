import { Component } from '@angular/core';

@Component ({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="jumbotron">
      <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
    </div>
      <h3>{{currentFocus}}</h3>
      <ul>
        <li [class]="priorityColor(currentTask)" (click)="isDone(currentTask)" *ngFor="let currentTask of tasks">{{currentTask.description}}
        <button (click)="editTask()">Edit!</button>
        </li>
      </ul>
      <hr>
      <div>
        <h3>{{selectedTask.description}}</h3>
        <p>Task Complete?{{selectedTask.done}}</p>
        <h3>Edit Task</h3>
        <label>Enter Task Description:</label>
        <input [(ngModel)]="selectedTask.description">

      </div>
  </div>
  `
})

export class AppComponent{
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  tasks: Task[] =[
    new Task('Finish weekend Angular homework for Epicodus course', 3),
    new Task('Begin brainstorming possible JavaScript group projects', 3),
    new Task('Add README file to last few Angular repos on GitHub', 2)
  ];
  selectedTask: Task = this.tasks[0];

  priorityColor(currentTask){
    if(currentTask.priority === 3){
      return "bg-danger";
    } else if(currentTask.priority === 2){
      return "bg-warning";
    } else {
      return "bg-info";
    }
  }

  editTask(){
    alert("You just requested to edit a Task!");
  }
}

export class Task {
  public done: boolean = false;
  constructor(public description: string, public priority: number) {}
}
