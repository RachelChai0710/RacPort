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
      name: 'Garageku Car Workshop',
      imgPath: 'assets/img/garageku.png',
      type: 'APP'
    },
    {
      name: 'Golden Beach Hotel App',
      imgPath: 'assets/img/icons8_beach_100.png',
      url: 'https://github.com/RachelChai0710/GB_Hotel/tree/master',
      type: 'APP'
    },
    {
      name: 'Anti-Theft Alarm System (SuperSecure)',
      imgPath: 'assets/img/icons8-home-alarm-96.png',
      type: 'OTHERS'
    }
  ]
}
