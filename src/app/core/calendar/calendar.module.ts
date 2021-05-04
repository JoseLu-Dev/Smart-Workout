import { TrainingsListComponent } from './../common/trainings-list/trainings-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarPageRoutingModule } from './calendar-routing.module';

import { CalendarPage } from './calendar.page';
import { CustomCalendarComponent } from './custom-calendar/custom-calendar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarPageRoutingModule
  ],
  declarations: [CalendarPage, CustomCalendarComponent, TrainingsListComponent],
})
export class CalendarPageModule {}
