import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  isNight = false
  public isCollapsed = true
  ngOnInit (): void {
  }

  btnNightModeOnClick (): void {
    this.isNight = !this.isNight
  }

  onClick () {
    this.isCollapsed = !this.isCollapsed
  }
}
