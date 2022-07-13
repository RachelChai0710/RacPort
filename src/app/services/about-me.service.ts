import { Injectable } from '@angular/core'
import { AboutMeConstants } from '../pages/about-me/about-me-profile/about-me-profile.constants'

export interface AboutMe{
  resumePath: string;
  resumeName: string;
  dtl: string;
  yoe: number;
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
    return this.aboutMe
  }
}
