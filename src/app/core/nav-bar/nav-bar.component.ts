import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit() {}

  goToProfile(){
    this.router.navigate(['app/profile'], { replaceUrl: true });
  }

  goToDay(){
    this.router.navigate(['app/day'], { replaceUrl: true });
  }

  goToCalendar(){
    this.router.navigate(['app/calendar'], { replaceUrl: true });
  }
}
