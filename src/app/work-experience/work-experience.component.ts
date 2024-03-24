import { Component } from '@angular/core';
import { WorkExperience } from './work-experience.model';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
  standalone: true,
})
export class WorkExperienceComponent {
  workExperiences: WorkExperience[];

  constructor() {
    this.workExperiences = [
      new WorkExperience('Ужну', 'Писав Дипломку', new Date(2024, 3, 10), new Date(2021, 5, 20), 'Писав дипломки на замовлення'),
    ];
  }
}