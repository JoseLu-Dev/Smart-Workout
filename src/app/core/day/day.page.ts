import { Component, OnInit } from '@angular/core';
import { DaysService } from '../common/services/days.service';

@Component({
  selector: 'app-day',
  templateUrl: './day.page.html',
  styleUrls: ['./day.page.scss'],
})
export class DayPage implements OnInit {

  public todayTrainings: any;

  constructor(public daysService: DaysService) { }

  ngOnInit() {
    const today = new Date();
    this.daysService.getDay(today.getFullYear(), today.getMonth() + 1, today.getDate()).subscribe(res => {
      console.log(res);
      this.todayTrainings = res['body'];
    });
  }

}
