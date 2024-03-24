import { Component } from '@angular/core';
import { Link } from './link.model';
import { Summary } from './summary.model';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css',],
  standalone: true,
})
export class SummaryComponent {
  summary: Summary;

  constructor() {
    this.summary = new Summary(
      '/assets/images/biber.png',
      [
        new Link('https://github.com/MartinShift', 'Github'),
        new Link('https://www.linkedin.com/in/saprykin-martin-a96496249/', 'LinkedIn'),
        new Link('https://steamcommunity.com/profiles/76561199367600829', 'Steam'),

      ]
    );
  }
}