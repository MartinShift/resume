import { Component, OnInit } from '@angular/core';
import { Skill } from './skill.model';
import { SkillsService } from './skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  standalone: true,
})
export class SkillsComponent implements OnInit {
  skills: Skill[];

  constructor(private skillsService: SkillsService) { this.skills = []; }

  ngOnInit(): void {
    this.skills = this.skillsService.getSkills();
  }
}