import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html'
})
export class ParentComponent implements OnInit {

  constructor() { }
  
  childData!: number;

  ngOnInit(): void {
    this.childData = 0;
  }

  parentMethod(data: number) {
    this.childData = data;
  }
}
