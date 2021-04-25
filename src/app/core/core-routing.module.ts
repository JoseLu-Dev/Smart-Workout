import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorePage } from './core.page';

const routes: Routes = [
  {
    path: '',
    component: CorePage,
    children: [
      {
        path: '',
        redirectTo: 'day'
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'day',
        loadChildren: () => import('./day/day.module').then( m => m.DayPageModule)
      },
      {
        path: 'calendar',
        loadChildren: () => import('./calendar/calendar.module').then( m => m.CalendarPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorePageRoutingModule {}
