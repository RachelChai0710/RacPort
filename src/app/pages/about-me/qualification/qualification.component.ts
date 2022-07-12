import { Component, OnInit } from '@angular/core'
import { Qualification, QualificationService } from 'src/app/services/qualification.service'

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss']
})
export class QualificationComponent implements OnInit {
  eduArr: Qualification[]
  workArr:Qualification[]

  constructor (private qualificationSrv: QualificationService) {
    this.eduArr = this.qualificationSrv.getEduArr()
    this.workArr = this.qualificationSrv.getWorkArr()
  }

  ngOnInit (): void {
  }
}
