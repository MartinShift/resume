import { Injectable } from '@angular/core';
import { WorkExperience } from './work-experience.model';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {

  constructor() { }

  getWorkExperiences(): WorkExperience[] {
    return [
      new WorkExperience('Company A', 'Position A', new Date(2020, 1, 1), new Date(2021, 1, 1), 'Description A'),
      new WorkExperience('Company B', 'Position B', new Date(2019, 1, 1), new Date(2020, 1, 1), 'Description B'),
      // Add more work experiences as needed
    ];
  }
}