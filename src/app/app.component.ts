import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasksLists: Array<string> = [];
  tasksDone: Array<string> = [];

  ngOnInit(): void {
    this.tasksLists = ['Sprzątanie kuwety', 'Nauka Angulara', 'Podlewanie kwiatów', 'Zakupy'];
  }

  add(task: string) {
    this.tasksLists.push(task);
  }

  remove(task: string) {
    this.tasksLists = this.tasksLists.filter(e => e !== task);
  }

  done(task: string) {
    this.tasksDone.push(task);
    this.remove(task);
  }
}
