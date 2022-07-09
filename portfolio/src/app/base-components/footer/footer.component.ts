import { Component, OnInit } from '@angular/core'
import { Profile, ProfileService } from 'src/app/services/profile.service'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  copyright: string
  profile:Profile

  constructor (private profileSrv: ProfileService) {
    this.copyright = profileSrv.getProfile().name + ' © 2022. All right reserved.'
    this.profile = profileSrv.getProfile()
  }

  ngOnInit (): void {
  }
}
