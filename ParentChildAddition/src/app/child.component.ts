import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
})
export class ChildComponent implements OnInit {
  num1!: number;
  num2!: number;
  Total!: number;

  @Output() 
  addition: EventEmitter<number> = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
  }

  getTotal() {
    this.addition.emit(this.Total = this.num1 + this.num2);
  }
}
