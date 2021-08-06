import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Training } from '../common/models/training.models';
import { DaysService } from '../common/services/days.service';
import { NavBarService } from '../nav-bar/nav-bar.service';

@Component({
  selector: 'app-day',
  templateUrl: './day.page.html',
  styleUrls: ['./day.page.scss'],
})
export class DayPage implements OnInit {

  public today: Date;

  public todayTrainings: any;

  constructor(
    public daysService: DaysService,
    private navBarService: NavBarService,
    private router: Router,
    ) { }

  ngOnInit() {
    this.today = new Date();
    this.daysService.getDay(
      this.today.getFullYear(),
      this.today.getMonth() + 1,
      this.today.getDate())
      .subscribe(res => {
        console.log(res);
        this.todayTrainings = res['body'];
      });
      this.navBarService.setPageSelected(this.navBarService.day);
  }

  onTrainingSelected(training: Training){
    this.router.navigate([`app/trainings/${training.id}`], { replaceUrl: false });
  }

}
