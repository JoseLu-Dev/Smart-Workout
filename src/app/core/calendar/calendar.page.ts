import { TrainingSpecs } from './../common/models/trainings-day.model';
import { NavBarService } from './../nav-bar/nav-bar.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  constructor(
    private navBarService: NavBarService,
    private router: Router,) { }

  ngOnInit() {
    this.navBarService.setPageSelected(this.navBarService.calendar);
  }

  onTrainingSelected(training: TrainingSpecs) {
    this.router.navigate([`app/trainings/${training.id}`], { replaceUrl: false });
  }
}
