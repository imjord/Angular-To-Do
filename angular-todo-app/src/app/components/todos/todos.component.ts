import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  
  todos:Todo[];

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'This is a todo',
        completed: false
      },
      {
        content: '2nd todo',
        completed: true
      }
    ]
  }

}
