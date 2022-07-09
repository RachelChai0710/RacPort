import { Injectable } from '@angular/core'
import { PortfolioConstants } from '../pages/home/portfolio/portfolio.constants'

export interface Portfolio{
  name: string;
  imagePath: string;
  type: portfolioType;
}

export enum portfolioType {'Web' = 1, 'App' = 2, "Other" = 3} 

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private portfolio: Portfolio[]
  constructor () {
    this.portfolio = PortfolioConstants.portfolio
  }

  getPortfolio ():Portfolio[] {
    return this.portfolio
  }

  getWebPortfolio ():Portfolio[] {
    return this.portfolio.filter((obj) => {
      return obj.type === portfolioType.Web
    })
  }

  getAppPortfolio ():Portfolio[] {
    return this.portfolio.filter((obj) => {
      return obj.type === portfolioType.App
    })
  }

  getOthPortfolio ():Portfolio[] {
    return this.portfolio.filter((obj) => {
      return obj.type === portfolioType.Other
    })
  }
}
