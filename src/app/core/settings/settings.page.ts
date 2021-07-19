import { NavBarService } from './../nav-bar/nav-bar.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/common/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(
    private authService: AuthService,
    private navBarService: NavBarService,) { }

  ngOnInit() {
    this.navBarService.setPageSelected(this.navBarService.settings);
  }

  onLogOutButtonCLicked() {
    this.authService.logout();
  }

}
