import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavBarService } from '../nav-bar.service';

@Component({
  selector: 'app-nav-bar-mobile',
  templateUrl: './nav-bar-mobile.component.html',
  styleUrls: ['./nav-bar-mobile.component.scss'],
})
export class NavBarMobileComponent implements OnInit {

  inStatistics: Observable<boolean>;
  inCalendar: Observable<boolean>;
  inDay: Observable<boolean>;
  inProfile: Observable<boolean>;
  inSettings: Observable<boolean>;

  constructor(
    private router: Router,
    private navBarService: NavBarService,) { }

  ngOnInit() {
    this.inStatistics = this.navBarService.getIfPageSelected(this.navBarService.statistics);
    this.inCalendar = this.navBarService.getIfPageSelected(this.navBarService.calendar);
    this.inDay = this.navBarService.getIfPageSelected(this.navBarService.day);
    this.inProfile = this.navBarService.getIfPageSelected(this.navBarService.profile);
    this.inSettings = this.navBarService.getIfPageSelected(this.navBarService.settings);
  }

  //TODO navigation similar to instagram to save previous visited and current pages when changing app parts
  goToProfile() {
    this.router.navigate(['app/profile'], { replaceUrl: true });
  }

  goToDay() {
    this.router.navigate(['app/day'], { replaceUrl: true });
  }

  goToCalendar() {
    this.router.navigate(['app/calendar'], { replaceUrl: true });
  }

  goToSettings() {
    this.router.navigate(['app/settings'], { replaceUrl: true });
  }

  goToStatistics() {
    this.router.navigate(['app/statistics'], { replaceUrl: true });
  }
}
