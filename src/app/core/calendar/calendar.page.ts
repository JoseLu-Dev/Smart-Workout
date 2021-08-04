import { NavBarService } from './../nav-bar/nav-bar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  constructor(private navBarService: NavBarService,) { }

  ngOnInit() {
    this.navBarService.setPageSelected(this.navBarService.calendar);
  }

}
