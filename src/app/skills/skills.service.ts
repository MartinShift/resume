import { Injectable } from '@angular/core';
import { Skill } from './skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }

  getSkills(): Skill[] {
    return [
      new Skill('JavaScript', 90),
      new Skill('Angular', 70),
      new Skill('React', 80),
      new Skill('Vue', 60),
      new Skill('Spring', 70),
      new Skill('Asp.Net', 95),
      new Skill('Laravel', 75),
    ];
  }
}