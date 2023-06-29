import { Injectable } from '@angular/core'
import { PortfolioConstants } from '../pages/home/portfolio/portfolio.constants'

export interface Portfolio{
  name: string;
  imgPath: string;
  url?: string;
  type: 'APP'| 'WEB' |'OTHERS';
}

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
      return obj.type === 'WEB'
    })
  }

  getAppPortfolio ():Portfolio[] {
    return this.portfolio.filter((obj) => {
      return obj.type === 'APP'
    })
  }

  getOthPortfolio ():Portfolio[] {
    return this.portfolio.filter((obj) => {
      return obj.type === 'OTHERS'
    })
  }
}
