import { Component, OnInit } from '@angular/core';
import { WorkExperience } from './work-experience.model';
import { WorkExperienceService } from './work-experience.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
  standalone: true,
})
export class WorkExperienceComponent implements OnInit {
  workExperiences: WorkExperience[];

  constructor(private workExperienceService: WorkExperienceService) { this.workExperiences = []; }

  ngOnInit(): void {
    this.workExperiences = this.workExperienceService.getWorkExperiences();
  }
}