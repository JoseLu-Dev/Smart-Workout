import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {

  statistics = 'statistics';
  calendar = 'calendar';
  profile = 'profile';
  day = 'day';
  settings = 'settings';

  private pagesMap = new Map([
    [this.statistics, new BehaviorSubject<boolean>(false)],
    [this.calendar, new BehaviorSubject<boolean>(false)],
    [this.profile, new BehaviorSubject<boolean>(false)],
    [this.day, new BehaviorSubject<boolean>(false)],
    [this.settings, new BehaviorSubject<boolean>(false)],
  ]);

  constructor() { }


  setPageSelected(page: string): void {
    for (const mapPage of this.pagesMap.values()) {
      if (mapPage.getValue()) {
        mapPage.next(false);
      }
    }
    this.pagesMap.get(page).next(true);
  }

  getIfPageSelected(page: string): Observable<boolean> {
    return this.pagesMap.get(page).asObservable();
  }
}
