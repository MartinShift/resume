import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  standalone: true
})
export class MainComponent {
  name: string;
  age: number;
  description: string;

  constructor() {
    this.name = 'Martin';
    this.age = 17; 
    this.description = 'yes';
  }
}