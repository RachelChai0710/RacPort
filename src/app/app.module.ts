import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NavBarComponent } from './base-components/nav-bar/nav-bar.component'
import { FooterComponent } from './base-components/footer/footer.component'
import { HomeComponent } from './pages/home/home.component'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card'
import { MatTabsModule } from '@angular/material/tabs'
import { ProfileComponent } from './pages/home/profile/profile.component'
import { PortfolioComponent } from './pages/home/portfolio/portfolio.component'
import { MatGridListModule } from '@angular/material/grid-list'
import { AboutMeComponent } from './pages/about-me/about-me.component'
import { ContactMeComponent } from './pages/home/contact-me/contact-me.component'
import { FlexLayoutModule } from '@angular/flex-layout'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons'
import { PortfolioItemComponent } from './pages/home/portfolio/portfolio-item/portfolio-item.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

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
    PortfolioItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatGridListModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    NgxBootstrapIconsModule.pick(allIcons),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
