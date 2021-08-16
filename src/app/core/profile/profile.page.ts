import { NavBarService } from './../nav-bar/nav-bar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public isTrainer = false;

  constructor(private navBarService: NavBarService,) { }

  ngOnInit() {
    this.navBarService.setPageSelected(this.navBarService.profile);
  }

}
