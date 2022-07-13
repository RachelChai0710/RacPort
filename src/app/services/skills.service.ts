import { Injectable } from '@angular/core'
import { SkillsConstants } from '../pages/about-me/skills/skills.contanst'

export interface Skills{
  name: string;
  percentage: number;
}

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private skillArr: Skills[]
  constructor () {
    this.skillArr = SkillsConstants.SKILL_ARR
  }

  getSkillArr ():Skills[] {
    return this.skillArr.sort((a, b) => (a.percentage > b.percentage ? -1 : 1))
  }
}
