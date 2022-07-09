import { Component, OnInit } from '@angular/core'
import { Portfolio, PortfolioService } from 'src/app/services/portfolio.service'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portfolio: Portfolio[]
  webPortfolio: Portfolio[]
  appPortfolio: Portfolio[]
  othPortfolio: Portfolio[]

  constructor (private portfolioSrv: PortfolioService) {
    this.portfolio = this.portfolioSrv.getPortfolio()
    this.webPortfolio = this.portfolioSrv.getWebPortfolio()
    this.appPortfolio = this.portfolioSrv.getAppPortfolio()
    this.othPortfolio = this.portfolioSrv.getOthPortfolio()
  }

  ngOnInit (): void {
  }
}
