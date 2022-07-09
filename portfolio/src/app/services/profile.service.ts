import { Injectable } from '@angular/core'
import { ProfileConstants } from '../pages/home/profile/profile.constants'

export interface Profile{
  name: string;
  nickname: string;
  role: string;
  resumePath: string;
  resumeName: string;
  dtl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profile: Profile

  constructor () {
    this.profile = ProfileConstants.PROFILE
  }

  getProfile (): Profile {
    return this.profile
  }

  getNameNNickname (): string {
    return this.profile.name + ' (' + this.profile.nickname + ')'
  }
}
