import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reference-code',
  templateUrl: './reference-code.component.html',
  styleUrls: ['./reference-code.component.scss']
})
export class ReferenceCodeComponent implements OnInit {

  hello = 'Hello World from Angular';

  displayLanguage(){
    console.log(`Typescript in use for Angular`)
  }

  // Simple Event Displayer
  displayEvent(event){
    console.log(`Angular Event ${event.target}`)
  };

  // Make dummy data 
  foods =[{
    'item1': 'burgers',
    'item2': 'hotdogs',
    'item3': 'pizza'
  },
  {
    'item1': 'tacos',
    'item2': 'wine',
    'item3': 'chocolate'
  }
]

  name = 'Robert';

  // Two-way Data binding Example
  @Input() size:number;
  @Output() sizeChange = new EventEmitter<number>()

  decrement(){
    this.resize(-1)
  }
  increment(){
    this.resize(+1)
  }

  resize(delta: number){
    this.size = 20 + delta;
    //this.size = Math.min(40, Math.max(8, +this.size + delta));//not working
    // this.size = delta++; //not working
    this .sizeChange.emit(this.size);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
