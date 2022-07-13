// @angular imports
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card'
import { MatTabsModule } from '@angular/material/tabs'
import { MatButtonModule } from '@angular/material/button'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatProgressBarModule } from '@angular/material/progress-bar'

// 3rd party imports
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { TimelineModule } from 'primeng/timeline'
import { CardModule } from 'primeng/card'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NavBarComponent } from './base-components/nav-bar/nav-bar.component'
import { FooterComponent } from './base-components/footer/footer.component'
import { HomeComponent } from './pages/home/home.component'
import { ProfileComponent } from './pages/home/profile/profile.component'
import { PortfolioComponent } from './pages/home/portfolio/portfolio.component'
import { AboutMeComponent } from './pages/about-me/about-me.component'
import { ContactMeComponent } from './pages/home/contact-me/contact-me.component'
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons'
import { PortfolioItemComponent } from './pages/home/portfolio/portfolio-item/portfolio-item.component'
import { TimelineComponent } from './base-components/timeline/timeline.component'
import { QualificationComponent } from './pages/about-me/qualification/qualification.component'
import { SkillsComponent } from './pages/about-me/skills/skills.component';
import { AboutMeProfileComponent } from './pages/about-me/about-me-profile/about-me-profile.component'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    ProfileComponent,
    PortfolioComponent,
    AboutMeComponent,
    ContactMeComponent,
    PortfolioItemComponent,
    TimelineComponent,
    QualificationComponent,
    SkillsComponent,
    AboutMeProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatGridListModule,
    MatProgressBarModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    NgxBootstrapIconsModule.pick(allIcons),
    NgbModule,
    TimelineModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
