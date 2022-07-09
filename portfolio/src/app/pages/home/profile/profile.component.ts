import { Component, OnInit } from '@angular/core';
import { Profile, ProfileService } from 'src/app/services/profile.service';
import { ProfileConstants } from './profile.constants'

enum socialMediaType {'LinkedIn' = 1, 'GitHub' = 2} 
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: Profile
  nameNNickname: string

  constructor(private profileSrv: ProfileService) {
    this.profile = this.profileSrv.getProfile()
    this.nameNNickname = this.profileSrv.getNameNNickname()
  }

  ngOnInit(): void {
  }

  onClick (type: number): void {
    switch (type) {
      case socialMediaType.LinkedIn:{
        window.open(ProfileConstants.LINKEDIN_URL)
        break;
      }
      case socialMediaType.GitHub:{
        window.open(ProfileConstants.GIT_URL)
        break;
      }
    }
  }

  dnlFileOnClick() : void{
    this.dnlFile();
  }
  
  private dnlFile(): void{
    let link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = this.profile.resumePath;
    link.download = this.profile.resumeName;
    document.body.appendChild(link);
    link.click();
    link.remove();  
  }
}
