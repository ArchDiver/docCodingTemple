import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-todo-home',
  templateUrl: './todo-home.component.html',
  styleUrls: ['./todo-home.component.scss']
})
export class TodoHomeComponent implements OnInit {
  todoDescriptionDisplay;

  // Todo Reactive Form
  todoForm = new FormGroup({
    todoName: new FormControl(''),
    todoDescription: new FormControl(''),
    todoCatagory: new FormControl('')
  })

  // Form Handler for Todo Reactive From
  onSubmit(){
    console.log(`${this.todoForm.value.todoName}`);
    console.log(`${this.todoForm.value.todoDescription}`);
    console.log(`${this.todoForm.value.todoCatagory}`);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
