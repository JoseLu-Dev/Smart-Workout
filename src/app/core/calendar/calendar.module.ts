import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarPageRoutingModule } from './calendar-routing.module';

import { CalendarPage } from './calendar.page';
import { CustomCalendarComponent } from './custom-calendar/custom-calendar.component';
import { TrainingsListWidgetModule } from '../common/trainings-list-widget/trainings-list-widget.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarPageRoutingModule,
    TrainingsListWidgetModule
  ],
  declarations: [CalendarPage, CustomCalendarComponent,],
})
export class CalendarPageModule {}
