import { Injectable } from '@angular/core'
import { QualificationConstants } from '../pages/about-me/qualification/qualification.constants'

export interface Qualification{
  header: string;
  date: string;
  school: string;
  color: string;
  icon: string;
  result?: string;
}

@Injectable({
  providedIn: 'root'
})
export class QualificationService {
  private eduArr: Qualification[]
  private workArr:Qualification[]
  constructor () {
    this.eduArr = QualificationConstants.EDU_ARR
    this.workArr = QualificationConstants.WORK_ARR
  }

  getEduArr ():Qualification[] {
    return this.eduArr
  }

  getWorkArr ():Qualification[] {
    return this.workArr
  }
}
