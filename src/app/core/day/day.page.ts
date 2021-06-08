import { Component, OnInit } from '@angular/core';
import { DaysService } from '../common/services/days.service';

@Component({
  selector: 'app-day',
  templateUrl: './day.page.html',
  styleUrls: ['./day.page.scss'],
})
export class DayPage implements OnInit {

  public today: Date;

  public todayTrainings: any;

  constructor(public daysService: DaysService) { }

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
  }

}
