import { Component, OnInit } from '@angular/core'
import { AboutMe, AboutMeService } from 'src/app/services/about-me.service'

@Component({
  selector: 'app-about-me-profile',
  templateUrl: './about-me-profile.component.html',
  styleUrls: ['./about-me-profile.component.scss']
})
export class AboutMeProfileComponent implements OnInit {
  aboutMe: AboutMe
  constructor (private abvMeSrv: AboutMeService) {
    this.aboutMe = this.abvMeSrv.getAboutMe()
  }

  ngOnInit (): void {
  }

  dnlFileOnClick () : void {
    this.dnlFile()
  }

  private dnlFile (): void {
    const link = document.createElement('a')
    link.setAttribute('type', 'hidden')
    link.href = this.aboutMe.resumePath
    link.download = this.aboutMe.resumeName
    document.body.appendChild(link)
    link.click()
    link.remove()
  }
}
