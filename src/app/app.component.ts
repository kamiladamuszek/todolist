import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTask: string;
  tasksLists: Array<string> = [];
  tasksDone: Array<string> = [];

  add() {
    this.tasksLists.push(this.newTask);
    this.newTask = '';
  }

  remove(task: string) {
    this.tasksLists = this.tasksLists.filter(e => e !== task);
  }

  done(task: string) {
    this.tasksDone.push(task);
    this.remove(task);
  }
}
