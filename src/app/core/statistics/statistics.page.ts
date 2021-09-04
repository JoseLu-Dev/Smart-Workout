import { NavBarService } from './../nav-bar/nav-bar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
})
export class StatisticsPage implements OnInit {

  constructor(
    private navBarService: NavBarService,
  ) { }

  ngOnInit() {
    this.navBarService.setPageSelected(this.navBarService.statistics);
  }

}
