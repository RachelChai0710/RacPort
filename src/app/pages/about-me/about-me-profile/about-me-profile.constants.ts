import { AboutMe } from 'src/app/services/about-me.service'

export class AboutMeConstants {
  public static GIT_URL: string = 'https://github.com/RachelChai0710'
  public static LINKEDIN_URL: string = 'https://www.linkedin.com/in/yee-shim-chai-s10p1/'
  public static ABOUT_ME: AboutMe = {
    resumePath: 'assets/pdf/Chai Yee Shim - Resume.pdf',
    resumeName: 'Chai Yee Shim - Resume.pdf',
    dtl: 'Software Engineer with industry experience building websites and web applications. I specialize in Java and have professional experience working with JSF, Spring Framework and Angular.',
    startDt: new Date('2022-01-19')
  }
}
