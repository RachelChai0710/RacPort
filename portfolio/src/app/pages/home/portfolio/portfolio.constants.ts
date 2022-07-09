import { Portfolio, portfolioType } from 'src/app/services/portfolio.service'

export class PortfolioConstants {
  public static portfolio: Portfolio[] = [
    {
      name: '',
      imagePath: '',
      type: portfolioType.App
    },
    {
      name: '',
      imagePath: '',
      type: portfolioType.App
    }
  ]
}
