import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {

  inCalendar = false;
  inDay = true;
  inProfile = false;

  inSettings = false;

  constructor(private router: Router,) { }

  ngOnInit() { }

  goToProfile() {
    this.router.navigate(['app/profile'], { replaceUrl: true });
    this.resetInVariablesStatus();
    this.inProfile = true;
  }

  goToDay() {
    this.router.navigate(['app/day'], { replaceUrl: true });
    this.resetInVariablesStatus();
    this.inDay = true;
  }

  goToCalendar() {
    this.router.navigate(['app/calendar'], { replaceUrl: true });
    this.resetInVariablesStatus();
    this.inCalendar = true;
  }

  goToSettings() {
    this.router.navigate(['app/settings'], { replaceUrl: true });
    this.resetInVariablesStatus();
    this.inSettings = true;
  }

  resetInVariablesStatus() {
    this.inCalendar = false;
    this.inDay = false;
    this.inProfile = false;
    this.inSettings = false;
  }
}
