import { NavBarService } from './../nav-bar/nav-bar.service';
import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../common/services/user-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public isTrainer = false;

  public userData;

  constructor(
    private navBarService: NavBarService,
    private userDataService: UserDataService,) { }

  ngOnInit() {
    this.navBarService.setPageSelected(this.navBarService.profile);

    this.userDataService.getUserData().subscribe(data => {
      this.userData = data;
    });
  }

}
