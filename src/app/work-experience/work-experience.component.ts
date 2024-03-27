import { Component, OnInit } from '@angular/core';
import { WorkExperience } from './work-experience.model';
import { WorkExperienceService } from './work-experience.service';
import { UpperCasePipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
  standalone: true,
  imports: [UpperCasePipe, DatePipe, LowerCasePipe]
})
export class WorkExperienceComponent implements OnInit {
  workExperiences: WorkExperience[];

  constructor(private workExperienceService: WorkExperienceService) { this.workExperiences = []; }

  ngOnInit(): void {
    this.workExperiences = this.workExperienceService.getWorkExperiences();
  }
}