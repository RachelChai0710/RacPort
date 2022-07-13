import { Component, OnInit } from '@angular/core'
import { ThemePalette } from '@angular/material/core'
import { Skills, SkillsService } from 'src/app/services/skills.service'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: Skills[]
  color: ThemePalette = 'primary'
  constructor (private skillsSrv:SkillsService) {
    this.skills = this.skillsSrv.getSkillArr()
  }

  ngOnInit (): void {
  }
}
