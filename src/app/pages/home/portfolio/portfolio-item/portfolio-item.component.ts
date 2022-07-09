import { Component, Input, OnInit } from '@angular/core'
import { Portfolio } from 'src/app/services/portfolio.service'

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss']
})
export class PortfolioItemComponent implements OnInit {
  @Input() item: Portfolio = {
    name: '',
    imgPath: '',
    url: '',
    type: 'WEB'
  }

  constructor () { }

  ngOnInit (): void {
  }
}
