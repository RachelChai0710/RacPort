import { Portfolio } from 'src/app/services/portfolio.service'

export class PortfolioConstants {
  public static portfolio: Portfolio[] = [
    {
      name: 'RacPort (Portfolio)',
      imgPath: 'favicon.ico',
      url: 'https://github.com/RachelChai0710/RacPort',
      type: 'WEB'
    },
    {
      name: 'Golden Beach Hotel App',
      imgPath: 'assets/img/icons8_beach_100.png',
      url: 'https://github.com/RachelChai0710/GB_Hotel/tree/master',
      type: 'APP'
    },
    {
      name: 'Golden Beach Hotel App',
      imgPath: 'favicon.ico',
      url: 'https://github.com/RachelChai0710/GB_Hotel/tree/master',
      type: 'APP'
    }
  ]
}
