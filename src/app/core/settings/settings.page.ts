import { NavBarService } from './../nav-bar/nav-bar.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/common/auth.service';
import { UserDataService } from '../common/services/user-data.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  weight: number;

  constructor(
    private authService: AuthService,
    private navBarService: NavBarService,
    private userStatsService: UserDataService,) { }

  ngOnInit() {
    this.navBarService.setPageSelected(this.navBarService.settings);
    this.userStatsService.getWeight().subscribe((weight) => {this.weight = weight;});
  }

  onLogOutButtonClicked() {
    this.authService.logout();
  }

  onWeightChanged(weight: number) {
    this.weight = weight;
    this.userStatsService.setWeight(this.weight);
  }
}
