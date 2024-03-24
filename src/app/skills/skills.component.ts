import { Component } from '@angular/core';
import { Skill } from './skill.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  standalone: true,
})
export class SkillsComponent {
  skills: Skill[];

  constructor() {
    this.skills = [
      new Skill('JavaScript', 90),  
      new Skill('Angular', 70),  
    ];
  }
}