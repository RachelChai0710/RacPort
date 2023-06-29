import { Injectable } from '@angular/core'
import { AboutMeConstants } from '../pages/about-me/about-me-profile/about-me-profile.constants'

export interface AboutMe{
  resumePath: string;
  resumeName: string;
  dtl: string;
  startDt: Date;
  yoe?: number;
}

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {
  private aboutMe: AboutMe

  constructor () {
    this.aboutMe = AboutMeConstants.ABOUT_ME
  }

  getAboutMe () {
    this.calYoe()
    return this.aboutMe
  }

  private calYoe () {
    const crrDt: Date = new Date()
    const monDiff = crrDt.getMonth() - this.aboutMe.startDt.getMonth()
    const yearDiff = crrDt.getFullYear() - this.aboutMe.startDt.getFullYear()
    this.aboutMe.yoe = ((yearDiff * 12) + monDiff) / 12
  }
}
